const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=9ad72bbd052048bc8209b4144bb54ca3";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}