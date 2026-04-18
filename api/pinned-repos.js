/**
 * Vercel Serverless Function: /api/pinned-repos
 * 
 * Fetches pinned repositories LIVE from a GitHub profile.
 * Runs server-side so there are no CORS issues.
 * 
 * Query params:
 *   ?username=Subhans1501
 * 
 * Returns JSON array of pinned repo objects with full details.
 */
export default async function handler(req, res) {
    const username = req.query.username || 'Subhans1501';

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600'); // Cache 5 min

    try {
        // Step 1: Fetch GitHub profile HTML
        const profileRes = await fetch(`https://github.com/${username}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0)',
                'Accept': 'text/html',
            },
        });

        if (!profileRes.ok) {
            throw new Error(`GitHub profile fetch failed: ${profileRes.status}`);
        }

        const html = await profileRes.text();

        // Step 2: Parse pinned repo names from HTML
        const pinnedNames = parsePinnedRepos(html, username);

        if (pinnedNames.length === 0) {
            return res.status(200).json({ repos: [], source: 'empty' });
        }

        // Step 3: Fetch full details for each pinned repo via GitHub REST API
        const repoPromises = pinnedNames.map(name =>
            fetch(`https://api.github.com/repos/${username}/${name}`, {
                headers: {
                    'User-Agent': 'PortfolioBot/1.0',
                    'Accept': 'application/vnd.github.v3+json',
                },
            })
                .then(r => r.ok ? r.json() : null)
                .catch(() => null)
        );

        const repos = (await Promise.all(repoPromises)).filter(Boolean);

        return res.status(200).json({
            repos,
            pinnedNames,
            source: 'live',
            fetchedAt: new Date().toISOString(),
        });
    } catch (err) {
        console.error('Pinned repos fetch error:', err.message);
        return res.status(500).json({ error: err.message, repos: [] });
    }
}

/**
 * Parses GitHub profile HTML to extract pinned repository names.
 */
function parsePinnedRepos(html, username) {
    const repoNames = [];

    // Match all links to /username/repo-name in the HTML
    const linkRegex = new RegExp(
        `href="/${username}/([A-Za-z0-9._-]+)"`,
        'gi'
    );

    const seen = new Set();
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
        const repoName = match[1];
        // Skip non-repo GitHub paths
        if (['followers', 'following', 'stars', 'repositories', 'projects', 'packages'].includes(repoName.toLowerCase())) continue;
        if (repoName.includes('?') || repoName.includes('=')) continue;
        // Collect unique repo names in order of appearance (pinned repos come first)
        if (!seen.has(repoName)) {
            repoNames.push(repoName);
            seen.add(repoName);
        }
    }

    // GitHub allows max 6 pinned repos — they appear first on the profile page
    return repoNames.slice(0, 6);
}
