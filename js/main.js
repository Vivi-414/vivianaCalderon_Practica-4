const TOKEN_API =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjkxOGYwMzJkNTVjOTAyMjU5MjlmYTY3MDViODUzMiIsInN1YiI6IjY2MzQ1NWJjNjYxMWI0MDEyNzY2ZWIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6gJkcqutfHUw1SxY1LWUs8bRXq0xnl_w58WgVBHKFY";

const basePathImg = "https://image.tmdb.org/t/p/original/";

const app = document.getElementById("app"); // <div id="app"></div>

async function fetchData(route, method = "GET") {
  const url = `https://api.themoviedb.org/3/${route ? route : "movie/popular"}`;

  const res = await fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${TOKEN_API}`,
    },
  });
  const data = await res.json();
  return data;
}

async function getData() {
  const { results } = await fetchData();
  results.forEach((backdrop_path,original_title,overview,poster_path) => {
    console.log(element);
  });
}
