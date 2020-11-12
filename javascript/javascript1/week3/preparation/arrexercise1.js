/**array exercise 1*/
/**1. Define an array of 5 items that are all numbers */
const arr = [1, 2, 3, 4, 5]
/**2. Add one number at the end of the array*/
arr.push(6);
/**3. Add another number at the beginning of the array*/
arr.unshift(0)
/**4. Print out how many items you have in your array*/
console.log(arr.length)
/**5. Remove the items you just added at the beginning and at the end*/
arr.pop()
/**6. Again print out how many items you have in your array with `.length*/
arr.shift()
/**7. Use the `for` loop to print out the items in your array*/
console.log(arr.length)
/**8. Use the `for..of` loop to print out the items in your array*/
for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);
console.log('------for of arr[i])-----');
/**9. Use the `.toString()` method to print out the items of your array*/
console.log('tostring' + arr.toString());
for (let i of arr)
    console.log(i);
/**10. Use the `.join()` method to print out the items in your array using `;` as a separator*/
console.log(arr.join(';'))

/**11. (Bonus) Check if an item exists in your array with `.includes()` */
console.log(arr.includes('4'))