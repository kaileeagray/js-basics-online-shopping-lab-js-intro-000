var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var c = getCart();
  var price = Math.floor(Math.random() * 100) + 1;
  c.push({itemName: item, itemPrice: price});
  setCart(c);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var c = getCart();
  if (c.length === 0) {
    "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
