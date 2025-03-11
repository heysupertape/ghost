// Cloudflare worker

export default {
  async fetch(request) {
    const req = new Request(request);
    const url = new URL(request.url);
    url.hostname = "ghost-l7kh.onrender.com";
    return await fetch(url, req);
  },
};
