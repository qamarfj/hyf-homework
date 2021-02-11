// import data here
const { json } = require("express");
const reservations = require("../data/reservations.json");

module.exports = {
  /***return all reservations */
  getAllReservations: () => {
    return reservations;
  },
  getReservations: (id) => {
    const reservation = reservations.find(
      (reservation) => reservation.id === id
    );
    return reservation;
  },
};
