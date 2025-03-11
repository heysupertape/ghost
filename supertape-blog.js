// Cloudflare worker

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const req = new Request(url.toString(), new Request(request));
    req.headers.set("host", "ghost-l7kh.onrender.com");
    return fetch(req);
  },
};
