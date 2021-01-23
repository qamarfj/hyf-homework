/**Create funtions that are used in these different ways:

Create an array with 3 items. All items should be functions. Iterate through the array 
and call all the functions.*/
const arrayOfFunctions = [
  () => console.log("function1"),
  () => console.log("function2"),
  () => console.log("function3"),
];

arrayOfFunctions.forEach((fun) => fun());
/**Create a function as a const and try creating a function normally. Call both functions.
 */
const functionWithConst = () => console.log("function with const");
function noramlFunction() {
  console.log("normal funtion");
}
functionWithConst();
noramlFunction();
/*Create an object that has a key whose value is a function. Try calling this function. */
const functionsObject = {
  fun: function functionWithInObject() {
    console.log("Log from inside the object");
  },
};

functionsObject.fun();
