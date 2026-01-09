const path = require('path');
const fs = require('fs');

// Check if standalone build exists
const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js');

if (fs.existsSync(standaloneServer)) {
  // Use standalone server
  process.chdir(path.join(__dirname, '.next', 'standalone'));
  require(standaloneServer);
} else {
  // Fallback to regular Next.js server
  const { createServer } = require('http');
  const { parse } = require('url');
  const next = require('next');

  const dev = process.env.NODE_ENV !== 'production';
  const hostname = process.env.HOST || '0.0.0.0';
  const port = parseInt(process.env.PORT, 10) || 3000;

  const app = next({ dev, hostname, port });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error('Error occurred handling', req.url, err);
        res.statusCode = 500;
        res.end('internal server error');
      }
    }).listen(port, hostname, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  });
}
