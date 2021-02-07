// import data here
const meals = require("./../data/meals.json");
const reservations = require("./../data/reservations.json");
const reviewsjson = require("./../data/reviews.json");

module.exports = {
  // return all the meals (including it's reviews)
  getAllMealsIncludedReiews: (args) => {
    let allMealsIncludedReiews;
    if (Object.entries(args).length === 0) {
      allMealsIncludedReiews = meals.map((meal) => {
        meal.reviews = [];
        reviewsjson.forEach((review) => {
          if (review.mealId === meal.id) {
            meal["reviews"].push(review);
          }
        });
        return meal;
      });
    } else {
      let firstKey = Object.keys(args)[0]; // "plainKey"
      let firstValue = Object.values(args)[0]; // "plain value"

      switch (firstKey) {
        case "maxPrice":
          allMealsIncludedReiews = meals
            .filter((currentMeal) => currentMeal.price < parseInt(firstValue))
            .map((meal) => {
              meal.reviews = [];
              reviewsjson.forEach((review) => {
                if (review.mealId === meal.id) {
                  meal["reviews"].push(review);
                }
              });
              return meal;
            });

          break;
        case "title":
          allMealsIncludedReiews = meals
            .filter((currentMeal) => currentMeal.title.includes(firstValue))
            .map((meal) => {
              meal.reviews = [];
              reviewsjson.forEach((review) => {
                if (review.mealId === meal.id) {
                  meal["reviews"].push(review);
                }
              });
              return meal;
            });

          break;
        case "createdAfter":
          allMealsIncludedReiews = meals
            .filter(
              (currentMeal) =>
                Date.parse(currentMeal.createdAt) > Date.parse(firstValue)
            )
            .map((meal) => {
              meal.reviews = [];
              reviewsjson.forEach((review) => {
                if (review.mealId === meal.id) {
                  meal["reviews"].push(review);
                }
              });
              return meal;
            });

          break;
        case "limit":
          const mealsLimit = [];
          const count = parseInt(firstValue);
          for (let i = 0; i < meals.length; i++) {
            if (i >= count) break;
            const meal = meals[i];
            meal.reviews = [];
            reviewsjson.forEach((review) => {
              if (review.mealId === meal.id) {
                meal["reviews"].push(review);
              }
            });
            mealsLimit.push(meal);
          }
          allMealsIncludedReiews = mealsLimit.map((meal) => meal);
          break;
        default:
          break;
      }
    }
    return allMealsIncludedReiews;
  },
  // meals by id
  getMealsIncludedReiews: (id) => {
    let mealfound;
    const mealsIncludedReiews = meals
      .filter((currentMeal) => currentMeal.id === id)
      .map((meal) => {
        meal.reviews = [];
        reviewsjson.forEach((review) => {
          if (review.mealId === meal.id) {
            meal["reviews"].push(review);
          }
        });
        mealfound = meal;
        return meal;
      });
    if (mealsIncludedReiews.length > 0) return mealfound;
    else return false;
  },
  /**return all the meals (including it's reviews)
   *  that are cheap (you define what a cheap meal is) */
  getAllCheapMealsIncludedReiews: () => {
    const allCheapMealsIncludedReiews = meals
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
    const allLargeMealsIncludedReiews = meals
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
    const randomMeal = meals[randomIndex];

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
  /**return all reviews */
  getAllReviews: () => {
    return reviewsjson;
  },
  getReviews: (id) => {
    let foundedRview;
    reviewsjson.forEach((review) => {
      if (review.id === id) {
        foundedRview = review;
      }
    });
    if (foundedRview) return foundedRview;
    else return false;
  },
};
