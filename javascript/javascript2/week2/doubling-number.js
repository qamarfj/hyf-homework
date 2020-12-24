"use stricit";
//doubles the odd numbers in an array and throws away the even numbers
const numbers = [1, 2, 3, 4];
const doublesOddNumbers = numbers
  .filter((currentNumber) => currentNumber % 2 !== 0)
  .map((oddNumber) => oddNumber * 2);
console.log(doublesOddNumbers);
