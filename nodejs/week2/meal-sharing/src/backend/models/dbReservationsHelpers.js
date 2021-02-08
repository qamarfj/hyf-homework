// import data here
const { json } = require("express");
const reservations = require("../data/reservations.json");

module.exports = {
  /***return all reservations */
  getAllReservations: () => {
    return reservations;
  },
  getReservations: (id) => {
    let foundedReservation;
    reservations.forEach((reservation) => {
      if (reservation.id === id) {
        foundedReservation = reservation;
      }
    });
    if (foundedReservation) return foundedReservation;
    else return false;
  },
};
