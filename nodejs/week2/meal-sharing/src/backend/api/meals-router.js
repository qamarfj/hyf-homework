// @ts-nocheck
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
const main = require("./main.js");
/*
router.get("/meals", async (request, response) => {
  try {
    response.json(meals);
    //console.log(meals);
    //console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});
router.get("/new", async (request, response) => {
  try {
    response.send("new meals");
    //console.log(meals);
    //console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});*/

// this is where you will be adding your routes
router.get("/", async (request, response) => {
  response.send("Meal Sharing Web app");
});

// Respond with the json for all the meals (including it's reviews)
router.get("/meals", async (request, response) => {
  try {
    let key = Object.keys(request.query)[0]; // "plainKey"
    let value = Object.values(request.query)[0]; // "plain value"
    switch (key) {
      case "maxPrice":
        if (parseInt(value) >= 0)
          response.json(main.getAllMealsIncludedReiews(request.query));
        else response.sendStatus(400);
        break;

      case "createdAfter":
        if (!isNaN(Date.parse(value)))
          response.json(main.getAllMealsIncludedReiews(request.query));
        else response.sendStatus(400);
        break;
      case "limit":
        if (parseInt(value) >= 0)
          response.json(main.getAllMealsIncludedReiews(request.query));
        else response.sendStatus(400);
        break;

      default:
        response.json(main.getAllMealsIncludedReiews(request.query));
        break;
    }
  } catch (error) {
    throw error;
  }
});

router.get("/meals/:id", async (request, response) => {
  try {
    const mealsId = parseInt(request.params.id);
    if (mealsId >= 0) response.json(main.getMealsIncludedReiews(mealsId));
    else response.sendStatus(400);
  } catch (error) {
    throw error;
  }
});
/**cheap-meals	Respond with the json for all the meals (including it's reviews)
 *  that are cheap (you define what a cheap meal is) */
router.get("/cheap-meals", async (request, response) => {
  try {
    response.json(main.getAllCheapMealsIncludedReiews());
  } catch (error) {
    throw error;
  }
});
/**large-meals	Respond  with the json for all the meals
 *  (including it's reviews) that can fit lots of people */
router.get("/large-meals", async (request, response) => {
  try {
    response.json(main.getAllLargeMealsIncludedReiews());
  } catch (error) {
    throw error;
  }
});
/**meal	Respond with the json for a random meal (including it's reviews) */
router.get("/meal", async (request, response) => {
  try {
    response.json(main.getRandomMealIncludedReiews());
  } catch (error) {
    throw error;
  }
});
/***reservations	Respond with the json for all reservations */
router.get("/reservations", async (request, response) => {
  try {
    response.json(main.getAllReservations());
  } catch (error) {
    throw error;
  }
});
// /***reservations/:id	Respond with the json for id matching reservations */
router.get("/reservations/:id", async (request, response) => {
  try {
    const reservationsId = parseInt(request.params.id);
    if (reservationsId >= 0)
      response.json(main.getReservations(reservationsId));
    else response.sendStatus(400);
  } catch (error) {
    throw error;
  }
});
/**all reviews */
router.get("/reviews", async (request, response) => {
  try {
    response.json(main.getAllReviews());
  } catch (error) {
    throw error;
  }
});
/**all reviews */
router.get("/reviews/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    if (id) response.json(main.getReviews(id));
    else response.sendStatus(400);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
