# Tillu News & Weather Service

A centralized, resilient service for fetching weather and news data with automatic fallback between multiple free API providers.

## Configuration

Copy `.env.example` to `.env` and provide your API keys:

```env
OPENWEATHER_KEY=your_key_here
WEATHERAPI_KEY=your_key_here
NEWSAPI_KEY=your_key_here
GNEWS_KEY=your_key_here
```

## API Endpoints

### 1. Weather
`GET /api/weather?city={city_name}`

- **Description**: Fetches current weather for the specified city.
- **Fallback Logic**: 
  1. OpenWeatherMap
  2. WeatherAPI

### 2. News
`GET /api/news?query={topic}`

- **Description**: Searches for news articles based on the query. If no query is provided, it defaults to `top-headlines`.
- **Fallback Logic**:
  1. NewsAPI
  2. GNews

## Response Format

All endpoints return a JSON object indicating the successful provider and the requested data:

```json
{
  "source": "OpenWeather",
  "data": { ... }
}
```

If all providers fail, a `503 Service Unavailable` error is returned.
