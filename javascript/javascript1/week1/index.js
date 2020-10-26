/**Age-ify (A future age calculator) */
const yearOfBirth = 1978; // can't be change
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log('You will be ' + age + ' years old in ' + yearFuture + '.');

/* Goodboy-Oldboy (A dog age calculator)*/
const dogYearOfBirth = 2017;
let dogYearFuture = 2027;
const dogYear = 7;
let shouldShowResultInDogYears = true;//Boolean variable 
if (shouldShowResultInDogYears) {
    console.log('Your dog will be ' + (dogYearFuture - dogYearOfBirth) +
        ' human years old in ' + yearFuture + '.');
}

else
    console.log('Your dog will be ' + (dogYearFuture - dogYearOfBirth) *
        dogYear + ' dog years old in ' + yearFuture + '.');

/*Housey pricey (A house price estimator)*/
let width;
let depth;
let height;
let gardenSizeInM2;
let houseCost;
let housePrice;
let estimat;
function estimator() {
    let volumeInMeters = width * depth * height;
    housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

    if (houseCost >= housePrice) return " too much";
    else return " too little";
}
/**Peter  */
width = 8;
depth = 10;
height = 10;
gardenSizeInM2 = 100;
houseCost = 2500000;
estimat = estimator()
console.log('Peter is paying ' + Math.abs(houseCost - housePrice) +
    ' ' + estimat);
/**Julia  */
width = 5;
depth = 11;
height = 8;
gardenSizeInM2 = 70;
houseCost = 1000000;
estimat = estimator()
console.log('Julia is paying ' + Math.abs(houseCost - housePrice) + ' '
    + estimat);

/**Ez Namey (Startup name generator)  */
const firstWords = ["Crazy", "Lucky", "Fantastic", "Easy", "Awesome",
    "Corporate", "Brilliant", "Two", "White", "Little"];
const secondWords = ["Leader", "Tech", "Excited", "Solution", "Beautiful",
    "Funcky", "Bully", "Sand", "Heart", "Next"];
const randomNumber = Math.floor(Math.random() * 10) + 0

let startupName = firstWords[randomNumber] + ' ' + secondWords[randomNumber]

console.log("\"The startup: \"" + startupName + "\" contains " +
    startupName.length + " characters\"");