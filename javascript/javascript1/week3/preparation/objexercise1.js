// Exercise #1
let cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function () {
    console.log('Meow!');
  }
}


const catName = cat['name']
console.log(catName)

cat.greeting();
cat.color = 'black'
console.log(cat.color)
