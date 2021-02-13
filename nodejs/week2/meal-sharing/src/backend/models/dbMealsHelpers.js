// import data here
const { json } = require("express");
const meals = require("../data/meals.json");
const reservations = require("../data/reservations.json");
const reviews = require("../data/reviews.json");
//create deep copy of meals
const allMeals = JSON.parse(JSON.stringify(meals));
//include reviews to meals
const allMealsIncludedReiews = allMeals.map((meal) => {
  meal.reviews = reviews.filter((review) => review.mealId === meal.id);
  return meal;
});

module.exports = {
  // return all the meals matching parameters (including it's reviews)
  getAllMealsIncludedReiews: (parameters) => {
    let maxPrice = parseInt(parameters.maxPrice);
    let title = parameters.title;
    let createdAfter = Date.parse(parameters.createdAfter);
    let limit = parseInt(parameters.limit);

    maxPrice = maxPrice > 0 ? maxPrice : Number.POSITIVE_INFINITY;
    title = typeof title == "undefined" ? "" : title;
    createdAfter = isNaN(createdAfter)
      ? Date.parse("1900-01-01")
      : createdAfter;
    limit = limit >= 0 ? limit : Number.POSITIVE_INFINITY;
    const filteredMeals = allMealsIncludedReiews
      .filter(
        (meal) =>
          meal.price < maxPrice &&
          meal.title.includes(title) &&
          Date.parse(meal.createdAt) > createdAfter
      )
      .slice(0, limit);

    return filteredMeals;
  },
  // meals by id
  getMealsIncludedReiews: (mealId) => {
    const mealById = allMealsIncludedReiews.find(
      (currentMeal) => currentMeal.id === mealId
    );
    return mealById;
  },
};
