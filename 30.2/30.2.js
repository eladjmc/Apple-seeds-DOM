// https://www.omdbapi.com/?t=pokemon&apikey=b50eadab

const input = document.getElementById("movie");
const searchBtn = document.querySelector("button");
const movieContainer = document.querySelector(".the-movie");
searchBtn.addEventListener("click", () => {
  startSearching();
});

const startSearching = () => {
  if (!input.value) return;
  document.querySelector(".movie-information").textContent =
    "Movie Information:";
  placeMovie(input.value);
};

async function placeMovie(movieName) {
  const response = await fetch(
    `https://www.omdbapi.com/?t=${movieName}&apikey=b50eadab`
  );
  if (!response.ok) {
    return;
  }
  movieContainer.classList.remove("display-none");
  await response.json().then((movie) => {
    console.log(movie);
    movieContainer.innerHTML = `
        <span class="title">${movie.Title}</span>
        <img src="${movie.Poster}" width="200" alt="">
        <span>Genre: ${movie.Genre}</span>
        <span>Year: ${movie.Year}</span>
        <span>Plot:</span>
        <div class="plot-text">${movie.Plot}</div>
        <span>Director: ${movie.Director}</span>
        <span>Actors: ${movie.Actors}.</span>
        <span>Rating: ${movie.Ratings[0].Value} , Votes: 8,814</span>
        `;
  });
}