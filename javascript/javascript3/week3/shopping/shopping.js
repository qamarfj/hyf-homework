const mainUL = document.querySelector("#container");
const currencies = [
  {
    name: " US Dollar",
    price: 6.06,
  },
  {
    name: "British Pound",
    price: 8.25,
  },
  {
    name: "Euro",
    price: 7.44,
  },
];

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    for (const currentCurrency of currencies) {
      if (currentCurrency.name === currency) return (this.price / currentCurrency.price).toFixed(2);
    }
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {    
    //addProduct should add a product to the products array
    this.products.push(product);
  }

  removeProduct(product) {    
    //should remove a product from the products array.
    this.products = this.products.filter(
      (cProduct) => cProduct.name !== product.name
    );
  }

  searchProduct(productName) {    
    //should return an array of product that match the productName parameter
    const matchedProducts = this.products.filter(
      (cProduct) => cProduct.name === productName
    );
    return matchedProducts;
  }

  getTotal() {    
    //should get the total price of the products in the shoppingcart.
    const reducer = (accmulator, cProduct) => accmulator + cProduct.price;
    const total = this.products.reduce(reducer, 0);
    return total;
  }

  renderProducts(userName) {    
    const user = document.querySelector("#user_name");
    user.textContent = userName;
    this.products.forEach((product) => {
      const ul = document.createElement("ul");
      ul.className = "detail_list";
      const productLi = document.createElement("li");
      const priceLi = document.createElement("li");
      const name = product.name;
      const price = product.price;
      productLi.textContent = name;
      priceLi.textContent = price;
      ul.appendChild(productLi);
      ul.appendChild(priceLi);
      const li = document.createElement("li");
      li.appendChild(ul);
      mainUL.appendChild(li);
    });
    const ul = document.createElement("ul");
    ul.className = "detail_list";
    const totalpriceLabelLi = document.createElement("li");
    const totalPriceLi = document.createElement("li");
    totalpriceLabelLi.textContent = "Total Price: ";
    totalPriceLi.textContent = this.getTotal();
    ul.appendChild(totalpriceLabelLi);
    ul.appendChild(totalPriceLi);
    const li = document.createElement("li");
    li.appendChild(ul);
    mainUL.appendChild(li);
  }

  getUser() {    
    return fetch(" https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response)
      .catch((e) => e);
  }
}
//Part 2
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("Flat-screen", 5000);
const radio = new Product("Radio", 2500);
const laptop = new Product("Laptop", 6000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(radio);
shoppingCart.addProduct(laptop);

shoppingCart
  .getUser()
  .then((response) => response.json())
  .then((user) => {
    shoppingCart.renderProducts(user.name);
  })
  .catch((e) => console.log(e));
  
//Part 3 Assuming dkk as default currency
const plant = new Product("plant", 50);
currencies.forEach((currency) => {
  console.log(
    `${plant.name}'s price in ${currency.name} is : ${plant.convertToCurrency(
      currency.name
    )}`
  ); // 7.5
});
