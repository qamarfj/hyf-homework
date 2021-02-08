// import data here
const { json } = require("express");
const reviews = require("../data/reviews.json");

module.exports = {
  /**return all reviews */
  getAllReviews: () => {
    return reviews;
  },
  getReviews: (id) => {
    const review= reviews.filter((review) => review.id === id );
	   
  return review[0];
    
  },
};
