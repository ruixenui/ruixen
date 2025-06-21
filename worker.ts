// Basic Cloudflare Worker
export default {
  async fetch(request: Request, env: any, ctx: any) {
    return new Response('Hello from Ruixen!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
