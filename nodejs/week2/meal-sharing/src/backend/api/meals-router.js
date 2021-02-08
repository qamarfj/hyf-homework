// @ts-nocheck
const { request, response } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
const dbMealsHelpers = require("../models/dbMealsHelpers");
// Respond with the json for all the meals (including it's reviews)
router.get("/", queryHelper, async (request, response) => {
  try {
    response.json(dbMealsHelpers.getAllMealsIncludedReiews(request.query));
  } catch (error) {
    throw error;
  }
});
async function queryHelper(request, response, next) {
  for (key in request.query) {
    switch (key) {
      case "maxPrice":
        if (parseInt(request.query[key]) >= 0) {
        } else return response.sendStatus(400);
        break;

      case "createdAfter":
        if (isNaN(Date.parse(request.query[key])))
          return response.sendStatus(400);
        break;
      case "limit":
        if (parseInt(request.query[key]) >= 0) {
        } else return response.sendStatus(400);
        break;
    }
  }
  return next();
}
router.get("/:id", async (request, response) => {
  try {
    const mealId = parseInt(request.params.id);
    if (mealId >= 0)
      response.json(dbMealsHelpers.getMealsIncludedReiews(mealId));
    else response.sendStatus(400);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
