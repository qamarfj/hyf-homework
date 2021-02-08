// @ts-nocheck
const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const dbReservationsHelpers = require("../models/dbReservationsHelpers");

/***reservations	Respond with the json for all reservations */
router.get("/", async (request, response) => {
  try {
    response.json(dbReservationsHelpers.getAllReservations());
  } catch (error) {
    throw error;
  }
});
// /***reservations/:id	Respond with the json for id matching reservations */
router.get("/:id", async (request, response) => {
  try {
    const reservationsId = parseInt(request.params.id);
    if (reservationsId >= 0)
      response.json(dbReservationsHelpers.getReservations(reservationsId));
    else response.sendStatus(400);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
