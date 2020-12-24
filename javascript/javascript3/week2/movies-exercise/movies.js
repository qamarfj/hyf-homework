fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((movies) => {
    //bad movies
    const badMovies = movies.filter((movie) => movie.rating < 3);
    //bad movies Since 2000
    const badoMviesSince2000 = badMovies.filter((movie) => movie.year >= 2000);
    const badMoviesList = document.querySelector("#bad-movies");
    const badMoviesList2000 = document.querySelector("#bad-movies-2000");
    badMovies.forEach((movie) => {
      const newLi = document.createElement("li");
      newLi.textContent = movie.title;
      badMoviesList.appendChild(newLi);
    });
    badoMviesSince2000.forEach((movie) => {
      const newLi = document.createElement("li");
      newLi.textContent = movie.title;
      badMoviesList2000.appendChild(newLi);
    });

    console.log(badMovies);
    console.log(badoMviesSince2000);
  })
  .catch((er) => console.log("error: ", er));
