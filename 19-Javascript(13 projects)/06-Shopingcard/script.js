const products = [
    {
        id: 1,
        name:"Headphones",
        price: 999,
        image: "🎧"
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 1499,
        image: "⌚"
    },
    {
        id: 3,
        name: "Shoes",
        price: 1999,
        image: "👟"

    },
    {
        id: 4,
        name: "Backpack",
        price: 799,
        image: "🎒"
    },
    {
       id: 5,
       price: 4999,
       name: "Camera",
       image: "📷"
 
    },
    {
       id: 6,
       name: "Mobile",
       price: 9999,
       image: "📱" 
    }
    
];

let card = JSON.parse(localStorage.getItem("shoppingCart")) || [];

const productsContainer = document.querySelector("#products");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const totalElement = document.querySelector("#total");
const clearCartBtn = document.querySelector("#clear-cart");

// Display products
function displayProducts() {
productsContainer.innerHTML = products.map(product => <div class="product-card"> 
<div class="product-image">${product.image}</div> <h3>${product.name}</h3> 
<p class="price">₹${product.price.toLocaleString("en-IN")}</p> 
<button class="add-btn" data-id="${product.id}"> Add to Cart </button> </div> ).join("");
}