"use strict";
/**Voice assistant */
/**variable name save the name and use for respond to commond */
let name = "";
/** keep track of todos */
const todos = [];

/**main function of the program which return a response that corresponds to the command */
function getReply(command) {
    //check the commond is not a string then stop the program with a message
    if (typeof command !== "string") {
        return "Please give command in correct format";
    }
    //convert command into an array
    const commandArray = command.split(" ");
    //if the first word of comman is hello then reply with wellcome message
    /* const commandWords = inputString.split(' ');
   
   if (command.startsWith('hello my name is')) {
   name = commandWords[commandWords.length - 1];
   return Nice to meet you ${name};
   }*/
    if (command.toLowerCase().startsWith("hello my name is")) {
        if (name === "") {
            name = commandArray[commandArray.length - 1];
            return "Nice to meet you " + name;
        } else {
            return "Why are you asking again?";
        }
    }
    //if the first word is 'what' then further check the last word to perform appropriate operation
    //else if (commandArray[0].toLowerCase() === 'what') { doing in alternative way
    else if (command.toLowerCase().startsWith("what")) {
        //if (commandArray[commandArray.length - 1].toLowerCase().includes('name')) {
        if (command.toLowerCase().includes("name")) {
            if (name !== "") {
                return "Your name is " + name;
            } else {
                return "Please Enter your name first";
            }
        }
        // else if (commandArray[commandArray.length - 1].toLowerCase().includes('todo')) {
        else if (command.toLowerCase().includes("todo")) {
            //show todo list
            return getToDos(todos);
        }
        //else if (commandArray[commandArray.length - 1].toLowerCase().includes('today')) {
        else if (command.toLowerCase().includes("today")) {
            //show today date
            return getDate();
        }
        //else if (commandArray[commandArray.length - 1].toLowerCase().includes('address')) {
        else if (command.toLowerCase().includes("address")) {
            //show address
            return "hackyourfuture's address is: Enghavevej 80 2450 københavn sv";
        } else {
            //call function to perform math opration
            return getMathResult(commandArray);
        }
    }
    // else if (commandArray[0].toLowerCase() === 'add') {
    else if (command.toLowerCase().startsWith("add")) {
        //call function to add todo in todos list
        return addTodo(commandArray);
    }
    //else if (commandArray[0].toLowerCase() === 'remove') {
    else if (command.toLowerCase().startsWith("remove")) {
        //call function to remove todo from todos list
        return removeTodo(commandArray);
    }
    //else if (commandArray[0].toLowerCase() === 'set') {
    else if (command.toLowerCase().startsWith("set")) {
        //call function to set timer
        return setTimer(commandArray);
    } else {
        return "Oops I don't recognize your command please follow program manual";
    }
    //end main program
}

/**return the todos list*/
function getToDos(todos) {
    let todo = "";
    for (let i = 0; i < todos.length - 1; i++) {
        if (todos.length === 2) {
            todo += todos[i];
        } else {
            todo += todos[i] + ",";
        }
    }
    if (todos.length > 1) {
        todo += " and " + todos[todos.length - 1];
    } else if (todos.length === 1) {
        todo = todos[0];
    }
    return "You have " + todos.length + " todos " + todo;
}
/**perform math opration and return result */
function getMathResult(commandArray) {
    const operator = commandArray[3];
    const firstNummber = parseInt(commandArray[2]);
    const secondNumber = parseInt(commandArray[4]);

    switch (operator) {
        case "+":
            return firstNummber + secondNumber;
        case "-":
            return firstNummber - secondNumber;
        case "*":
            return firstNummber * secondNumber;
        case "/":
            return firstNummber / secondNumber;
        case "%":
            return firstNummber % secondNumber;
    }
}
//add todo to todos list
function addTodo(commandArray) {
    let todoToAdd = "";
    for (let i = 1; i < commandArray.length - 3; i++) {
        todoToAdd += commandArray[i] + " ";
    }
    todos.push(todoToAdd);
    return todoToAdd + " added to your todo";
}
//remove todo from todos list
function removeTodo(commandArray) {
    let todoToRemove = "";
    for (let i = 1; i < commandArray.length - 3; i++) {
        todoToRemove += commandArray[i] + " ";
    }
    for (let i = 0; i < todos.length; i++) {
        if (todoToRemove === todos[i]) {
            todos.splice(i, 1);
            break;
        }
    }
    return "Removed " + todoToRemove + " from your todo";
}

//set timer
function setTimer(commandArray) {
    //set timer

    const timeInMinutes = parseInt(commandArray[commandArray.length - 2]);
    const timeInSeconds = timeInMinutes * 60;
    let timerInterval = setInterval(function () {
        myStopFunction();
    }, 1000 * timeInSeconds);

    function myStopFunction() {
        console.log("Timer done");
        clearInterval(timerInterval);
    }
    return "Timer set for " + commandArray[commandArray.length - 2] + " minutes";
}
/**return the date in a human readable format */
function getDate() {
    const toDate = new Date();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        toDate.getDate() +
        ". of " +
        months[toDate.getMonth()] +
        " " +
        toDate.getFullYear()
    );
}
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to todo"
console.log(getReply("What is on my todo?")); // "show all todos"
console.log(getReply("Remove fishing from my todo")); //fishing removed
console.log(getReply("What is on my todo?")); //"show all todos"
console.log(getReply("What is 3 + 3")); // "show 6"
console.log(getReply("What day is it today?")); // "what is date today"
console.log(getReply("What is hackyourfuture's address?")); // "Engahvevej 80 copenhagen"
console.log(getReply(" a timer for ")); // Oops command not recognised
console.log(getReply("Set a timer for 4 minutes")); // "set timer"
