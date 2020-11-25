console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
function renderProducts(products) {
    // your code here
    const ul = document.querySelector("ul");
    for (product of products) {
        const li = document.createElement("li");
        li.innerHTML = `<h2>${product.name}</h2> Price: ${product.price} <br> Rating: ${product.rating}`
        ul.appendChild(li);
    }

}

renderProducts(products);