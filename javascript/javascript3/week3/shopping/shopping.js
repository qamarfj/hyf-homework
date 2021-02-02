// @ts-nocheck
const mainUL = document.querySelector("#container");
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  async convertToCurrency(currency) {
    let isCurrencyFound = false;
    let price;

    const promise = await fetch(
      "https://api.exchangeratesapi.io/latest?base=DKK"
    );
    const data = await promise.json();

    for (let key in data.rates) {
      if (key == currency) {
        const currentrate = data.rates[key];
        price = this.price * currentrate;
        isCurrencyFound = true;
      }
    }
    if (isCurrencyFound) return price;
    else return "Currency not found :";
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

  async getUser() {
    const response = await fetch(
      " https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    return user.name;
  }
}
//Part 2 create instance of ShoppingCart
const shoppingCart = new ShoppingCart();
//create instances of Product
const flatscreen = new Product("Flat-screen", 5000);
const radio = new Product("Radio", 2500);
const laptop = new Product("Laptop", 6000);
const iphone = new Product("Apple iphone", 6030);
const glaxy = new Product("Samsung Glaxy", 60400);
const camra = new Product("Sony Camra", 63000);
//add products in shopingcart
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(radio);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(glaxy);
shoppingCart.addProduct(camra);
//get user name then render products from shopping cart
async function renderProductsWithUserName() {
  const userName = await shoppingCart.getUser();
  shoppingCart.renderProducts(userName);
}
renderProductsWithUserName();

//Part 3 Assuming dkk as default currency

async function priceInOtherCurrency() {
  const plant = new Product("plant", 50);
  //price in GBP
  const currencyName = "GBP";
  const price = await plant.convertToCurrency(currencyName);
  console.log(`${plant.name}'s price in ${currencyName} is : ${price}`);
  //test with none existence currency
  const wrongCurrencyName = "Wrong Currency";
  const priceWithWrongCurrencyName = await plant.convertToCurrency(
    wrongCurrencyName
  );
  console.log(
    `${plant.name}'s price in ${wrongCurrencyName} is : ${priceWithWrongCurrencyName}`
  );
}
priceInOtherCurrency();
//Part 2  searchbar where a user can search for a product. Matching product are shown as an autocomplete.
/*the autocomplete function takes two arguments, search input text field and availble products*/
function autocomplete(searchField, availableProducts) {
  let currentFocus;
  /*execute a function when someone writes in the search field:*/
  // @ts-ignore
  searchField.addEventListener("input", function () {
    let searchWord = this.value;
    /*close any already open lists of autocompleted */
    closeLists();
    /*if search string in null then stop function*/
    if (!searchWord) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the productsToAutocomplete*/
    const autocompleteDiv = document.createElement("DIV");
    autocompleteDiv.setAttribute("id", this.id + "autocomplete-list");
    autocompleteDiv.setAttribute("class", "autocomplete-items");
    const inputContainer = document.getElementById("search_container");
    /*append the autocompleteDiv to input field container div*/
    inputContainer.appendChild(autocompleteDiv);
    /*for each product in the productsToAutocomplete*/
    for (let i = 0; i < availableProducts.length; i++) {
      /*is search word match with availableproducts*/
      if (
        availableProducts[i].substr(0, searchWord.length).toUpperCase() ==
        searchWord.toUpperCase()
      ) {
        /*create a DIV element for each matching product*/
        const matchingProductDiv = document.createElement("DIV");
        /*make the matching letters bold:*/
        matchingProductDiv.innerHTML =
          "<strong>" +
          availableProducts[i].substr(0, searchWord.length) +
          "</strong>";
        matchingProductDiv.innerHTML += availableProducts[i].substr(
          searchWord.length
        );
        /*set current product to value of matchingProductDiv*/
        matchingProductDiv.innerHTML +=
          "<input type='hidden' value='" + availableProducts[i] + "'>";
        /*execute function when someone clicks on the product in the autocomplete list*/
        // @ts-ignore
        matchingProductDiv.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          searchField.value = this.getElementsByTagName("input")[0].value;
          /*close the all lists*/
          closeLists();
          //render product to modal

          showModal(searchField.value);
        });
        autocompleteDiv.appendChild(matchingProductDiv);
      }
    }
  });
  /*runs at every key pressed in searchfield */
  searchField.addEventListener("keydown", function (e) {
    let currentDiv = document.getElementById(this.id + "autocomplete-list");

    if (currentDiv) currentDiv = currentDiv.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*DOWN key is pressed, move Focus down*/
      currentFocus++;
      /*make the current product more visible*/
      addActive(currentDiv);
    } else if (e.keyCode == 38) {
      /*UP key is pressed,  move Focus up*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(currentDiv);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed */
      if (currentFocus > -1) {
        /*put current value in searchfiled and hide list*/
        if (currentDiv) currentDiv[currentFocus].click();
      } else {
        //just clear all lists
        closeLists();
      }
      //render product to modal
      showModal(searchField.value);
    }
  });
  function addActive(autocompleteProducts) {
    /*autocompleteDiv function to classify an item as "active":*/
    if (!autocompleteProducts) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(autocompleteProducts);
    if (currentFocus >= autocompleteProducts.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = autocompleteProducts.length - 1;
    /*add class "autocomplete-active":*/
    autocompleteProducts[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(autocompleteProducts) {
    for (let i = 0; i < autocompleteProducts.length; i++) {
      autocompleteProducts[i].classList.remove("autocomplete-active");
    }
  }
  function closeLists() {
    /*close all autocomplete lists:*/
    const autoCList = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < autoCList.length; i++) {
      autoCList[i].parentNode.removeChild(autoCList[i]);
    }
  }
  /*clicked on document ,close any open list */
  document.addEventListener("click", () => {
    closeLists();
  });
}
/* initiate autocomplete function by passing searchinput field and availble products*/
const products = shoppingCart.products.map((product) => product.name);
autocomplete(document.getElementById("search_Input"), products);

//Clicking a product in the autocomplete opens a modal with product information.
//get the modal and x button icon
const modal = document.querySelector("#my-modal");
const closeIcon = document.querySelector(".close");
//function to display modal
function showModal(productName) {
  //get array of matching products from shoppingCart
  const matchedproducts = shoppingCart.searchProduct(productName);
  // product found, show products detail otherwise default message from html file
  if (matchedproducts.length > 0) {
    let productDetail = "";
    matchedproducts.forEach((product) => {
      productDetail += product.name + " Price: " + product.price;
    });
    document.getElementById("modal-text").textContent = productDetail;
  }
  modal.style.display = "block";
}
// close when clicked on <span> (x)
closeIcon.onclick = function () {
  modal.style.display = "none";
};

// cose it when clicked outside of the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
