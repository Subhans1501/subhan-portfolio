import { useState, useEffect } from 'react';

export default function useGithub(username) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (!username) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                // Fetch Repos (Fetch 100 to ensure we find top non-forks)
                const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`);

                if (!repoRes.ok) {
                    if (repoRes.status === 403 || repoRes.status === 429) throw new Error('GitHub API Rate Limit Exceeded');
                    throw new Error('Failed to fetch repos');
                }
                const allRepos = await repoRes.json();

                // Filter: No Forks, Top 6
                const filteredRepos = allRepos.filter(repo => !repo.fork).slice(0, 6);

                // Fetch Profile (for avatar/bio)
                const profileRes = await fetch(`https://api.github.com/users/${username}`);
                const profileData = await profileRes.json();

                setRepos(filteredRepos);
                setProfile(profileData);
            } catch (err) {
                setError(err.message);
                // Fallback data for demo if API fails (rate limits etc)
                setRepos([
                    { id: 1, name: "Neural_Network_Viz", description: "3D Visualization of Neural Networks using Three.js", language: "JavaScript", stargazers_count: 12, html_url: "#" },
                    { id: 2, name: "AI_Portfolio", description: "Professional Portfolio with Glassmorphism UI", language: "React", stargazers_count: 45, html_url: "#" },
                    { id: 3, name: "Transformer_Research", description: "Implementation of Attention mechanisms from scratch.", language: "Python", stargazers_count: 8, html_url: "#" }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [username]);

    const isOffline = !!error;
    return { repos, profile, loading, error, isOffline };
}
