"use strict";
/**Write a function that finds the shortest word of an array of words */
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(danishWords) {
  let shortestWord = danishWords[0];
  for (let i = 1; i < danishWords.length; i++) {
    if (shortestWord.length > danishWords[i].length) {
      shortestWord = danishWords[i];
    }
  }
  return shortestWord;
}
const shortestWord = getShortestWord(danishWords); // returns 'ø'
console.log(shortestWord);
