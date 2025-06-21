// Basic Cloudflare Worker
export default {
  async fetch(request, env, ctx) {
    return new Response('Hello from Ruixen!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
