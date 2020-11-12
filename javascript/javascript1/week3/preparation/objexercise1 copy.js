// Exercise #1
let cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function () {
    console.log('Meow!');
  }
}

/*/ 1. Create a variable `catName`, use bracket notation to get the value of the
 'name' property of `cat`*/
const catName = cat['name']
console.log(catName)
/*/ 2. Run the `greeting()` method using dot notation 
(it will log the greeting to the browser DevTools' console).*/
cat.greeting();
// 3. Update the `color` property value to `black`.*
cat.color = 'black'
console.log(cat.color)
