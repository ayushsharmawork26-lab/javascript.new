const products = [
{ id: 1, name: "Headphones", price: 999, image: "🎧" },
{ id: 2, name: "Smart Watch", price: 1499, image: "⌚" },
{ id: 3, name: "Shoes", price: 1999, image: "👟" },
{ id: 4, name: "Backpack", price: 799, image: "🎒" },
{ id: 5, name: "Camera", price: 4999, image: "📷" },
{ id: 6, name: "Mobile", price: 9999, image: "📱" }
];

let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

const productsContainer = document.querySelector("#products");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const totalElement = document.querySelector("#total");
const clearCartBtn = document.querySelector("#clear-cart");

// Display Products
function displayProducts() {
productsContainer.innerHTML = products.map(product =>          <div class="product-card">             <div class="product-image">${product.image}</div>             <h3>${product.name}</h3>             <p class="price">₹${product.price}</p>             <button class="add-btn" data-id="${product.id}">
                Add to Cart             </button>         </div>
    ).join("");
}

// Add Product to Cart
function addToCart(id) {
const existingProduct = cart.find(item => item.id === id);


if (existingProduct) {
    existingProduct.quantity++;
} else {
    const product = products.find(item => item.id === id);

    if (product) {
        cart.push({
            ...product,
            quantity: 1
        });
    }
}

updateCart();


}

// Display Cart Items
function displayCart() {
if (cart.length === 0) {
cartItems.innerHTML = "<p>Your cart is empty!</p>";
return;
}


cartItems.innerHTML = cart.map(item => 
    <div class="cart-item">
        <div>
            <h4>${item.image} ${item.name}</h4>
            <p>Price: ₹${item.price}</p>

            <div class="quantity-controls">
                <button data-action="decrease" data-id="${item.id}">−</button>

                <span>${item.quantity}</span>

                <button data-action="increase" data-id="${item.id}">+</button>
            </div>
        </div>

        <div>
            <p>Total: ₹${item.price * item.quantity}</p>

            <button class="remove-btn"
                data-action="remove"
                data-id="${item.id}">
                Remove
            </button>
        </div>
    </div>
).join("");


}

// Update Cart and Calculate Total
function updateCart() {
displayCart();


const totalItems = cart.reduce(
    (total, item) => total + item.quantity, 0
);

const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
);

cartCount.textContent = totalItems;
totalElement.textContent = totalPrice;

localStorage.setItem("shoppingCart", JSON.stringify(cart));


}

// Add to Cart Button Event
productsContainer.addEventListener("click", function (event) {
const button = event.target.closest(".add-btn");


if (!button) return;

const id = Number(button.dataset.id);

addToCart(id);


});

// Increase, Decrease and Remove Products
cartItems.addEventListener("click", function (event) {
const button = event.target.closest("button");


if (!button) return;

const id = Number(button.dataset.id);
const action = button.dataset.action;

if (action === "increase") {
    const item = cart.find(item => item.id === id);

    if (item) {
        item.quantity++;
    }
}

if (action === "decrease") {
    const item = cart.find(item => item.id === id);

    if (item) {
        item.quantity--;

        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
    }
}

if (action === "remove") {
    cart = cart.filter(item => item.id !== id);
}

updateCart();


});

// Clear Cart
clearCartBtn.addEventListener("click", function () {
cart = [];
updateCart();
});

// Initialize Project
displayProducts();
updateCart();
