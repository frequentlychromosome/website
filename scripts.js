// Function to add an item to the shopping cart
function addToCart(itemName, price) {
  // Create a new list item element
  const listItem = document.createElement('li');

  // Create text node for the item name and price
  const itemText = document.createTextNode(`${itemName} - $${price.toFixed(2)}`);

  // Append the text node to the list item
  listItem.appendChild(itemText);

  // Get the cart items container
  const cartItemsContainer = document.getElementById('cart-items');

  // Append the new list item to the cart items container
  cartItemsContainer.appendChild(listItem);

  // Calculate and display the total price
  calculateTotalPrice();
}

// Function to calculate and display the total price
function calculateTotalPrice() {
  const cartItems = document.querySelectorAll('#cart-items li');
  let totalPrice = 0;

  cartItems.forEach(item => {
    const priceString = item.textContent.split('-')[1].trim().slice(1); // Extract price from text
    totalPrice += parseFloat(priceString);
  });

  const totalElement = document.getElementById('cart-total');
  totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Example usage:
// Assuming you have buttons or links on your menu items
// with onclick attributes like this:
// <button onclick="addToCart('Sourdough Bread', 5.99)">Add to Cart</button>
