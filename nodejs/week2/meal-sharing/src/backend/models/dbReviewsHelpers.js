// import data here
const { json } = require("express");
const reviews = require("../data/reviews.json");

module.exports = {
  /**return all reviews */
  getAllReviews: () => {
    return reviews;
  },
  getReviews: (id) => {
    let foundedRview;
    reviews.forEach((review) => {
      if (review.id === id) {
        foundedRview = review;
      }
    });
    if (foundedRview) return foundedRview;
    else return false;
  },
};
