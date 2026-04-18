/**
 * Local development server that simulates Vercel serverless functions.
 * Run this alongside `npm run dev` to test the /api endpoints locally.
 * 
 * Usage: node api-dev-server.js
 */
import http from 'http';
import { URL } from 'url';

const PORT = 3001;

// Dynamically import the handler
async function loadHandler(name) {
    const mod = await import(`./api/${name}.js`);
    return mod.default;
}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        return res.end();
    }

    if (url.pathname === '/api/pinned-repos') {
        try {
            const handler = await loadHandler('pinned-repos');
            // Simulate Vercel req/res
            const query = Object.fromEntries(url.searchParams);
            const fakeReq = { query };
            const fakeRes = {
                _status: 200,
                _headers: {},
                _body: null,
                setHeader(k, v) { this._headers[k] = v; },
                status(code) { this._status = code; return this; },
                json(data) {
                    this._body = JSON.stringify(data);
                    return this;
                },
            };

            await handler(fakeReq, fakeRes);

            res.writeHead(fakeRes._status, fakeRes._headers);
            res.end(fakeRes._body);
        } catch (err) {
            console.error('Handler error:', err);
            res.writeHead(500);
            res.end(JSON.stringify({ error: err.message }));
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`\n  🚀 API dev server running at http://localhost:${PORT}`);
    console.log(`  📡 Test: http://localhost:${PORT}/api/pinned-repos?username=Subhans1501\n`);
});
