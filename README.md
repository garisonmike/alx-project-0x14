# MoviesDatabase API Overview

The MoviesDatabase API provides access to a vast collection of movie titles, allowing users to browse, search, and retrieve detailed information about films. Key features include fetching movie lists, filtering by release year and genre, and pagination support for navigating through large datasets.

## Version
v1

## Available Endpoints
- **/titles**: The main endpoint for fetching movie data. It supports filtering by year and genre and implements pagination.
- **/titles/{id}**: Retrieve specific details for a movie by its unique ID.
- **/titles/random**: Fetch a random movie title.

## Request and Response Format
**Request:**
Requests are made using HTTP GET methods (or POST in our proxy implementation) with query parameters for filtering.
Example: `GET /titles?year=2023&genre=Action&page=1`

**Response:**
The API returns a JSON object containing a list of movies and pagination information.
```json
{
  "page": 1,
  "next": "/titles?page=2",
  "entries": 10,
  "results": [
    {
      "id": "tt1234567",
      "titleText": { "text": "Movie Title" },
      "primaryImage": { "url": "https://image.url/..." },
      "releaseYear": { "year": 2023 }
    }
  ]
}
```

## Authentication
Authentication is handled via API keys sent in the request headers.
- **Header Name**: `x-rapidapi-key`
- **Header Value**: Your unique API key.
- **Host Header**: `x-rapidapi-host: moviesdatabase.p.rapidapi.com`

## Error Handling
Common error responses include:
- **401 Unauthorized**: Invalid or missing API key. Check your headers.
- **429 Too Many Requests**: Rate limit exceeded. Implement exponential backoff.
- **500 Internal Server Error**: Issue on the API side. Retry later.

In code, handle these by checking `response.ok` and catching exceptions in `try/catch` blocks.

## Usage Limits and Best Practices
- **Rate Limiting**: The API has rate limits. Avoid making excessive requests in a short period.
- **Pagination**: Use the `page` parameter to retrieve data in chunks rather than fetching everything at once.
- **Caching**: Cache responses on the client side where appropriate to reduce API calls.
- **Environment Variables**: Store API keys in `.env.local` and never expose them in client-side code.
