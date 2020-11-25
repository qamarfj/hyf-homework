"use strict"
/**Find the individual number and the total number of Danish letters in a string.*/
function getDanishLetters(danishString) {
    const lettersInString = {
        total: 0,
    }
    for (const letter of danishString) {
        if (letter === 'æ') {
            lettersInString.total++;
            lettersInString.æ = (lettersInString.æ >= 0) ? lettersInString.æ++ : lettersInString.æ = 1;
        }
        else if (letter === 'ø') {
            lettersInString.total++;
            lettersInString.ø = (lettersInString.ø > 0) ? lettersInString.ø++ : lettersInString.ø = 1;

        }
        else if (letter === 'å') {
            lettersInString.total++;
            lettersInString.å = (lettersInString.å > 0) ? lettersInString.å++ : lettersInString.å = 1;
        }


    }
    return lettersInString;
}

const danishString = "Jeg har en blå bil";
const letters = getDanishLetters(danishString); // returns {total: 1, å: 1}
console.log(letters)
const danishString2 = "Blå grød med røde bær";
const letters2 = getDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
console.log(letters2)