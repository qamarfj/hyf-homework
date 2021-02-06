// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations.json");
const reviewsjson = require("./data/reviews.json");

module.exports = {
  // return all the meals (including it's reviews)
  getAllMealsIncludedReiews: () => {
    //create a deep copy of Meals before including reviews in it.
    const allMeals = JSON.parse(JSON.stringify(meals));
    const allMealsIncludedReiews = allMeals.map((meal) => {
      meal.reviews = [];
      reviewsjson.forEach((review) => {
        if (review.mealId === meal.id) {
          meal["reviews"].push(review);
        }
      });
      return meal;
    });
    return allMealsIncludedReiews;
  },
  /**return all the meals (including it's reviews)
   *  that are cheap (you define what a cheap meal is) */
  getAllCheapMealsIncludedReiews: () => {
    //create a deep copy of Meals before including reviews in it.
    const allMeals = JSON.parse(JSON.stringify(meals));
    const allCheapMealsIncludedReiews = allMeals
      .filter((currentMeal) => currentMeal.price < 69)
      .map((meal) => {
        meal.reviews = [];
        reviewsjson.forEach((review) => {
          if (review.mealId === meal.id) {
            meal["reviews"].push(review);
          }
        });
        return meal;
      });
    return allCheapMealsIncludedReiews;
  },
  /**return all the meals
   *  (including it's reviews) that can fit lots of people */
  getAllLargeMealsIncludedReiews: () => {
    //create a deep copy of Meals before including reviews in it.
    const allMeals = JSON.parse(JSON.stringify(meals));
    const allLargeMealsIncludedReiews = allMeals
      .filter((currentMeal) => currentMeal.maxNumberOfGuests > 10)
      .map((meal) => {
        meal.reviews = [];
        reviewsjson.forEach((review) => {
          if (review.mealId === meal.id) {
            meal["reviews"].push(review);
          }
        });
        return meal;
      });
    return allLargeMealsIncludedReiews;
  },
  /**retun a random meal (including it's reviews) */
  getRandomMealIncludedReiews: () => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    //create a deep copy of Meal before including reviews in it.
    const randomMeal = JSON.parse(JSON.stringify(meals[randomIndex]));

    randomMeal.reviews = [];
    reviewsjson.forEach((review) => {
      if (review.mealId === randomMeal.id) {
        randomMeal["reviews"].push(review);
      }
    });

    return randomMeal;
  },
  /***return all reservations */
  getAllReservations: () => {
    return reservations;
  },

  /**return a random reservation */
  getRandomReservation: () => {
    const randomIndex = Math.floor(Math.random() * reservations.length);

    return reservations[randomIndex];
  },
};
