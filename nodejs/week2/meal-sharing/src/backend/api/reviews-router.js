// @ts-nocheck
const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const dbReviewsHelpers = require("../models/dbReviewsHelpers");

/**all reviews */
router.get("/", async (request, response) => {
  try {
    response.json(dbReviewsHelpers.getAllReviews());
  } catch (error) {
    throw error;
  }
});
/**all reviews */
router.get("/:id", async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    if (id) response.json(dbReviewsHelpers.getReviews(id));
    else response.sendStatus(400);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
