const express = require("express");
const app = express();

// import data here
const main = require("./main.js");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});
// Respond with the json for all the meals (including it's reviews)
app.get("/meals", async (request, response) => {
  response.json(main.getAllMealsIncludedReiews());
});
/**cheap-meals	Respond with the json for all the meals (including it's reviews)
 *  that are cheap (you define what a cheap meal is) */
app.get("/cheap-meals", async (request, response) => {
  response.json(main.getAllCheapMealsIncludedReiews());
});
/**large-meals	Respond  with the json for all the meals
 *  (including it's reviews) that can fit lots of people */
app.get("/large-meals", async (request, response) => {
  response.json(main.getAllLargeMealsIncludedReiews());
});
/**meal	Respond with the json for a random meal (including it's reviews) */
app.get("/meal", async (request, response) => {
  response.json(main.getRandomMealIncludedReiews());
});
/***reservations	Respond with the json for all reservations */
app.get("/reservations", async (request, response) => {
  response.json(main.getAllReservations());
});

/**reservation**	Respond with the json for a random reservation */
app.get("/reservation**", async (request, response) => {
  response.json(main.getRandomReservation());
});

module.exports = app;
