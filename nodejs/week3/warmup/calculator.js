module.exports = {
  getSum: async (addends) => {
    let sum = 0;
    for (const key in addends) {
      if (Array.isArray(addends[key])) {
        addends[key].forEach((addend) => {
          sum += parseInt(addend);
        });
      } else sum += parseInt(addends[key]);
    }

    return sum;
  },
  getSubtraction: async (collection) => {
    const minuend = collection.firstParam;
    const subtrahend = collection.secondParam;
    const difference = parseInt(minuend) - parseInt(subtrahend);

    return difference;
  },
  getProduct: async (multipliers) => {
    let product = 1;
    for (const key in multipliers) {
      if (Array.isArray(multipliers[key])) {
        multipliers[key].forEach((multiplier) => {
          product *= parseInt(multiplier);
        });
      } else product *= parseInt(multipliers[key]);
    }
    return product;
  },
  getDivision: async (numerator, denominator) => {
    const quotient = numerator / denominator;
    return quotient;
  },
};
