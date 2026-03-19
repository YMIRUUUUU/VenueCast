const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const CITY_REQUESTS = [];

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(payload));
}

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      sendJson(res, 404, { success: false, message: 'Not found' });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600',
    });
    res.end(data);
  });
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1e6) {
        reject(new Error('Payload too large'));
        req.destroy();
      }
    });

    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function serveIndex(res) {
  sendFile(res, path.join(ROOT, 'index.html'));
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(url.pathname);

  if (req.method === 'GET' && pathname === '/api/health') {
    sendJson(res, 200, { ok: true, requests: CITY_REQUESTS.length });
    return;
  }

  if (req.method === 'POST' && pathname === '/api/city-request') {
    try {
      const rawBody = await readBody(req);
      const payload = rawBody ? JSON.parse(rawBody) : {};

      if (!payload.email || !payload.city) {
        sendJson(res, 400, { success: false, message: 'email and city are required' });
        return;
      }

      CITY_REQUESTS.push({
        email: String(payload.email).trim(),
        city: String(payload.city).trim(),
        country: payload.country ? String(payload.country).trim() : '',
        message: payload.message ? String(payload.message).trim() : '',
        createdAt: new Date().toISOString(),
      });

      sendJson(res, 200, {
        success: true,
        message: 'City request received',
        totalRequests: CITY_REQUESTS.length,
      });
    } catch (error) {
      sendJson(res, 400, { success: false, message: 'Invalid JSON payload' });
    }
    return;
  }

  if (req.method === 'GET') {
    if (pathname === '/' || pathname === '/index.html') {
      serveIndex(res);
      return;
    }

    const safePath = path.normalize(path.join(ROOT, pathname));
    if (!safePath.startsWith(ROOT)) {
      sendJson(res, 403, { success: false, message: 'Forbidden' });
      return;
    }

    if (fs.existsSync(safePath) && fs.statSync(safePath).isFile()) {
      sendFile(res, safePath);
      return;
    }

    serveIndex(res);
    return;
  }

  res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Method not allowed');
});

server.listen(PORT, () => {
  console.log(`VenueCast running on http://localhost:${PORT}`);
});
