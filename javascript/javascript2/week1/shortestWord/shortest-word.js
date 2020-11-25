"use strict"
/**Write a function that finds the shortest word of an array of words */
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(danishWords) {
    let shortestWord = danishWords[0];
    for (const currentWord of danishWords) {
        if (shortestWord.length > currentWord.length) {
            shortestWord = currentWord;
        }
    }
    return shortestWord;
}
const shortestWord = getShortestWord(danishWords); // returns 'ø'
console.log(shortestWord);