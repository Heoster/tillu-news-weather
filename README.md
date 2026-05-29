# Tillu News & Weather Service

A centralized, resilient, and AI-ready service providing weather and news data for the Tillu ecosystem. It features automatic provider fallback to ensure high availability even when primary APIs are down or rate-limited.

## Features
- **Resilient**: Multi-source fallback logic for both Weather and News data.
- **Lightweight**: Optimized for Vercel Serverless Functions.
- **Configurable**: Easily add or remove API providers via simple JS handlers.

## Supported Providers
- **Weather**: OpenWeatherMap, WeatherAPI
- **News**: NewsAPI, GNews

## Deployment
This project is pre-configured for **Vercel**.

1. Click the "Import Project" button in your Vercel dashboard.
2. Select this repository (`Heoster/tillu-news-weather`).
3. Configure the following **Environment Variables**:
   - `OPENWEATHER_KEY`
   - `WEATHERAPI_KEY`
   - `NEWSAPI_KEY`
   - `GNEWS_KEY`
4. Click **Deploy**.

## API Usage

### Weather
`GET /api/weather?city={city_name}`

### News
`GET /api/news?query={topic}` (Defaults to `top-headlines`)

## Contributing
Contributions are welcome! Please ensure any new API providers follow the existing handler pattern to maintain the fallback loop.
