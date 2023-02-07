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

// {Title: 'Pokemon 4Ever: Celebi - Voice of the Forest', Year: '2001', Rated: 'G', Released: '11 Oct 2002', Runtime: '75 min', …}
// Actors
// :
// "Veronica Taylor, Rica Matsumoto, Rachael Lillis"
// Awards
// :
// "N/A"
// BoxOffice
// :
// "$1,727,447"
// Country
// :
// "Japan"
// DVD
// :
// "N/A"
// Director
// :
// "Kunihiko Yuyama, Jim Malone"
// Genre
// :
// "Animation, Action, Adventure"
// Language
// :
// "Japanese"
// Metascore
// :
// "N/A"
// Plot
// :
// "Ash must stop a hunter who forces the mythical Pokémon Celebi to help him destroy a forest."
// Poster
// :
// "https://m.media-amazon.com/images/M/MV5BZDZiYjc3MWYtODE5Mi00MDM5LWFkZTAtNjAzZmUxMzc4ZGQxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// Production
// :
// "N/A"
// Rated
// :
// "G"
// Ratings
// :
// [{…}]
// Released
// :
// "11 Oct 2002"
// Response
// :
// "True"
// Runtime
// :
// "75 min"
// Title
// :
// "Pokemon 4Ever: Celebi - Voice of the Forest"
// Type
// :
// "movie"
// Website
// :
// "N/A"
// Writer
// :
// "Hideki Sonoda, Michael Haigney, Satoshi Tajiri"
// Year
// :
// "2001"
// imdbID
// :
// "tt0287635"
// imdbRating
// :
// "5.7"
// imdbVotes
// :
// "8,814"
