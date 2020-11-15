/**freecodecamp.org username qamarfj */

/**Flight booking fullname function */
function getFullname(firstname, surname, useFormalName = false) {
    //  are firstname and surname are not empty and there values are not  false or true? 
    if (arguments.length >= 2 && typeof (arguments[1]) === 'string') {
        if (useFormalName === true && firstname !== '' && surname !== '')
            return 'Lord ' + firstname + ' ' + surname;
        else if (useFormalName === false && firstname !== '' && surname !== '')
            return firstname + ' ' + surname;
        else
            return 'Please Enter First name and Last Name';
    }
    else
        return 'Please Enter First name and Last Name';

}

const fullname1 = getFullname('Benjamin', 'Hughes', true);
const fullname2 = getFullname('viktor', 'hogu');
const fullname3 = getFullname('viktor', true);
console.log('Fullname1 : "' + fullname1 + '" ');
console.log('Fullname2 : "' + fullname2 + '"');
console.log('Fullname3 : "' + fullname3 + '"');

/**Event application */
function getEventWeekday(noOfDays) {
    const date = new Date();
    const todays = date.getDay();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return weekDays[(todays + noOfDays % 7) % 7]
}
// With todays weekday a tuesday
console.log(getEventWeekday(9)); // Logs out "Thursday"
// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"

/**Weather wear */
function recommendToWear(temperature) {

    if (temperature > 55) {
        return "Are you at Venus? You don't need to wear any clothes ";
    }
    else if (temperature <= 55 && temperature > 40) {
        return "Its too hot stay inside and wear shorts";
    }
    else if (temperature <= 40 && temperature > 30) {
        return "Wear shorts and drink lots of water";

    }
    else if (temperature <= 30 && temperature > 20) {
        return "Wear shorts and T-shirt";
    }
    else if (temperature <= 20 && temperature > 10) {
        return "Wear summer jacket  ";
    }
    else if (temperature <= 10 && temperature > 0) {
        return "Wear jacket and full size trouser";
    }
    else if (temperature <= 0 && temperature > -10) {
        return "Wear winter jacket and trouser";
    }
    else if (temperature <= -10 && temperature > -20) {
        return "Wear double winter jacket";
    }
    else if (temperature <= -20 && temperature > - 30) {
        return "Wear very very warm clothes and stay inside";
    }
    else if (temperature <= -30) {
        return "Are you at pluto? I can't suggest you any anything";
    }
    else {
        return "Please Enter valid temprature";
    }
}

let clothesToWear = recommendToWear(21);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

/**addStudentToClass function */
const class07Students = [];
function addStudentToClass(studentName) {
    const numberOfStudents = getNumberOfStudents()
    /**check class has stil place for one student and student name is not Queen */
    if (numberOfStudents >= 6 && studentName.toLowerCase() !== 'queen')
        console.log('"Can not add more students to class 07"');
    else if (studentName === '') {
        console.log('Please Enter valid student name.');
    }
    else {
        /*check student name is allready added or not*/
        let isAllreadyAdded = false;
        for (let i = 0; i < numberOfStudents; i++) {

            if (class07Students[i].toLowerCase() === studentName.toLowerCase() && studentName.toLowerCase() !== 'queen') {
                /**if student name found break the loop */
                isAllreadyAdded = true; break;
            }
        }
        if (isAllreadyAdded) {
            console.log('Student ' + studentName + ' is already in the class');
        }
        else {/**(name of student is not already added) and (No of students are not more then 6) or( name is queen.) So, add new student   */
            class07Students.push(studentName)

        }
    }

}

function getNumberOfStudents() {
    return class07Students.length;

}
addStudentToClass('student1');
addStudentToClass('');
addStudentToClass('student2');
addStudentToClass('student2');
addStudentToClass('student3');
addStudentToClass('student4');
addStudentToClass('student5');
addStudentToClass('student6');
addStudentToClass('student7');
addStudentToClass('queen');
addStudentToClass('queen');
addStudentToClass('queen');
console.log(getNumberOfStudents())

/**Candy helper optional */
let boughtCandyPrices = [];
const candyTypeList = ['Sweet', 'Chocolate', 'Toffee', 'Chewing-gum']
const candyPricePerGram = [0.5, 0.7, 1.1, 0.03]

function addCandy(candyType, weight) {
    for (let i = 0; i < candyTypeList.length; i++) {
        if (candyTypeList[i].toLocaleLowerCase() === candyType.toLocaleLowerCase()) {
            boughtCandyPrices.push(weight * candyPricePerGram[i]);
            break;
        }
    }
}
let amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
    let allreadySpend = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        allreadySpend += boughtCandyPrices[i];
    }
    if (amountToSpend > allreadySpend)
        return true
    else
        return false
}
function tryToBuy() {
    /*buy some candy */
    const randomIndex = Math.floor(Math.random() * 4);
    const randomQuantity = Math.ceil(Math.random() * 9);
    addCandy(candyTypeList[randomIndex], randomQuantity);
    /*  try to buy some more candy*/
    if (canBuyMoreCandy()) {
        console.log("You can buy more, so please do!")
        tryToBuy();
    }
    else
        console.log("Enough candy for you!")
}

tryToBuy()
