console.log("Blush Bean Café Loaded");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
function addToCart(){
    alert("Coffee Added To cart💖")
}
let cartCount = 0;
let total = 0;

function addToCart(name, price){

  let cartCount = 0;
let total = 0;

function addToCart(name, price){

  const cartItems =
  document.getElementById("cart-items");

  cartCount++;

  document.getElementById("cart-count")
  .innerText = cartCount;

  total += price;

  document.getElementById("cart-total")
  .innerText = `Total: ₹${total}`;

  const item =
  document.createElement("div");

  item.classList.add("cart-item");

  item.innerHTML = `

    <h4>${name}</h4>

    <p>₹${price}</p>

  `;

  cartItems.appendChild(item);

}

function openCart(){

  document.getElementById("cartSidebar")
  .classList.add("active");

}

function closeCart(){

  document.getElementById("cartSidebar")
  .classList.remove("active");

}
}
