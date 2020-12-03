"use strict";
console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("ul");
const sortType = document.getElementById("sort-selection");
//dispaly products
function renderProducts(products) {
  // clear list before displaying new list
  clearList();

  //create list of countries
  products.forEach((product) => {
    let shipsTo = "";
    product.shipsTo.forEach((country) => (shipsTo += `<li>${country}</li>`));

    const li = document.createElement("li");
    li.className = "prduct-display";
    li.innerHTML = `<ul>
    <li>${product.name}</li>
    <li> ${product.price}</li> 
    <li> ${product.rating}</li>
    <li> <ul>${shipsTo}</ul></li>
    </ul>`;
    productsUl.appendChild(li);
  });
}
// display whole list first time
renderProducts(getSorted(products));

//display products matches to names intered by user
const searchInputField = document.getElementById("serach-input");

searchInputField.addEventListener("keyup", () =>
  renderProducts(getSorted(getSearchProductByName(products)))
);

// Filter products on name field
function getSearchProductByName(products) {
  const searchInput = searchInputField.value.toLowerCase();
  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput)
  );
  return searchedProducts;
}

//function to remove all li from ul
function clearList() {
  while (productsUl.children.length > 0) {
    productsUl.removeChild(productsUl.childNodes[0]);
  }
}

//display products based on max price
const maxPriceInput = document.getElementById("max-price");
maxPriceInput.addEventListener("keyup", () => {
  const maxPrice = parseInt(maxPriceInput.value);
  if (maxPrice > 0) {
    //if user entered valid digit
    const productsByMaxPrice = getSearchProductByMaxPrice(products, maxPrice);
    renderProducts(getSorted(productsByMaxPrice));
  }
  //show all product
  else renderProducts(getSorted(products));
});

//Filter products based on max price
function getSearchProductByMaxPrice(products, maxPrice) {
  const searchedProduct = products.filter(
    (product) => product.price <= maxPrice
  );
  return searchedProduct;
}

//sorting
//eventlistener for sorting type change
sortType.addEventListener("change", () => {
  console.log("change :   " + typeof sortType.selectedIndex);
  const sortedProduct = getSorted(products);
  renderProducts(sortedProduct);
});

//function for sorting
function getSorted(products) {
  //sort by price
  if (sortType.selectedIndex === 0) {
    const sortedProducts = products.sort((productA, productB) => {
      return productA.price - productB.price;
    });
    return sortedProducts;
  } else if (sortType.selectedIndex === 1) {
    const sortedProducts = products.sort((productA, productB) => {
      return productB.price - productA.price;
    });
    return sortedProducts;
  } else if (sortType.selectedIndex === 2) {
    //sort by name
    const sortedProducts = products.sort((productA, productB) => {
      var nameA = productA.name.toUpperCase(); // ignore upper and lowercase
      var nameB = productB.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    return sortedProducts;
  }
}
