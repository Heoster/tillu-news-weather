export default async function handler(req, res) {
  const { query } = req.query;
  const q = query || 'top-headlines';

  const providers = [
    { name: 'NewsAPI', url: `https://newsapi.org/v2/everything?q=${q}&apiKey=${process.env.NEWSAPI_KEY}` },
    { name: 'GNews', url: `https://gnews.io/api/v4/search?q=${q}&apikey=${process.env.GNEWS_KEY}` }
  ];

  for (const provider of providers) {
    try {
      const response = await fetch(provider.url);
      if (response.ok) {
        const data = await response.json();
        return res.status(200).json({ source: provider.name, data });
      }
    } catch (e) {
      console.error(`${provider.name} failed:`, e);
    }
  }

  res.status(503).json({ error: 'All news providers failed' });
}
