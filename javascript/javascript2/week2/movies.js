const { movies } = require("./movies-data.js");
//Create an array of movies containing the movies with a short title
const shortTitlemovies = movies.filter((movie) => movie.title.length <= 10);
console.log(shortTitlemovies.length);

//Create an array of movie titles with long movie titles
const longMovieTitles = movies
  .filter((movie) => movie.title.length > 10)
  .map((movie) => movie.title);
console.log(longMovieTitles);

//Count the number of movies made between 1980-1989 (including both the years)
const numberOfMovies = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
).length;
console.log(" Movies from 1980 to 1989 : " + numberOfMovies);

//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
//This is a bit tricky, but you are actually changing the original array! You are also filtering but not returning a boolean
//will keep this code for reference
/*const moviesWithTag = movies.filter((movie) => {
  if (movie.rating >= 7) movie.tag = "Good";
  if (movie.rating >= 4 && movie.rating < 7) movie.tag = "Average";
  if (movie.rating < 4) movie.tag = "Bad";
  return movie;
});*/
function reducer(accumulator, movie) {
  const currentmovie = {};
  Object.assign(currentmovie, movie);
  if (currentmovie.rating >= 7) currentmovie.tag = "Good";
  if (currentmovie.rating >= 4 && currentmovie.rating < 7)
    currentmovie.tag = "Average";
  if (currentmovie.rating < 4) currentmovie.tag = "Bad";
  accumulator.push(currentmovie);
  return accumulator;
}
const moviesWithTag = movies.reduce(reducer, []);
console.log(moviesWithTag);

//Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const moviesRating = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(moviesRating);

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?

const numberOfMoviesHavingKeywords = movies.filter((movie) =>
  /Surfer|Alien|Benjamin/i.test(movie.title)
).length;
console.log(
  "Number Of Movies containing any Keywords : " + numberOfMoviesHavingKeywords
);

//Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"
const regEx = new RegExp(/\b(\w+)\b.*\b\1\b/i);
const moviesDuplicatedWordTest = movies.filter((movie) =>
  regEx.test(movie.title)
);
console.log(moviesDuplicatedWordTest);

//Calculate the average rating of all the movies using reduce. Optional
const averageRating =
  movies.reduce(
    (accumulator, currentMovie) => accumulator + currentMovie.rating,
    0
  ) / movies.length;
console.log(averageRating);

//Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
const numberOfMoviesByTag = { goodMovies: 0, averageMovies: 0, badMovies: 0 };

const reduser = (numberOfMoviesByTag, currentMovie) => {
  if (currentMovie.tag === "Good") {
    numberOfMoviesByTag.goodMovies++;
  }
  if (currentMovie.tag === "Average") {
    numberOfMoviesByTag.averageMovies++;
  }
  if (currentMovie.tag === "Bad") {
    numberOfMoviesByTag.badMovies++;
  }
  return numberOfMoviesByTag;
};

const totalMoviesByTag = moviesWithTag.reduce(reduser, numberOfMoviesByTag);
console.log(totalMoviesByTag);
