export default async function handler(req, res) {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: 'City is required' });

  const providers = [
    { name: 'OpenWeather', url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_KEY}` },
    { name: 'WeatherAPI', url: `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHERAPI_KEY}&q=${city}` }
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

  res.status(503).json({ error: 'All weather providers failed' });
}
