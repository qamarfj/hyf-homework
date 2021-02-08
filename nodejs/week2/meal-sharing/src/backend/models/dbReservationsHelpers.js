// import data here
const { json } = require("express");
const reservations = require("../data/reservations.json");

module.exports = {
  /***return all reservations */
  getAllReservations: () => {
    return reservations;
  },
  getReservations: (id) => {
   const reservation=
    reservations.filter((reservation) =>  (reservation.id === id));
    return reservation[0];
  },
};
