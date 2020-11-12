
/* What is this code going to show ?*/
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy" Note: here will be copied only address of fruits, new array will not created
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // will alert 4 because shoppingCart and fruits both are refrance for same array or point the same memory loction */