/**
 * Simple Cloudflare Worker script for testing
 */

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Return a simple HTML response for testing
  return new Response(
    `<!DOCTYPE html>
    <html>
      <head>
        <title>Ruixen - Cloudflare Worker Test</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 40px auto; padding: 0 10px; line-height: 1.6; }
          h1 { color: #333; }
          .success { color: #0070f3; }
          .info { color: #666; margin-top: 30px; }
          code { background: #f0f0f0; padding: 2px 5px; border-radius: 3px; }
        </style>
      </head>
      <body>
        <h1>Ruixen <span class="success">✓</span></h1>
        <p>Your Cloudflare Worker is running successfully!</p>
        <p>This is a test page to verify that your worker configuration is correct.</p>
        <div class="info">
          <p>Request URL: <code>${request.url}</code></p>
          <p>Worker Name: <code>ruixen</code></p>
          <p>Date: <code>${new Date().toISOString()}</code></p>
        </div>
      </body>
    </html>`,
    {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    }
  );
}
