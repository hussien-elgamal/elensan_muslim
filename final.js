function showImage(category) {
  const image = document.getElementById("display-image");
  
  // حدد الصور الخاصة بكل قسم
  const images = {
    collections: "collections.jpg", // ضع مسار الصورة هنا
    men: "men.jpg",                 // ضع مسار الصورة هنا
    women: "women.jpg",             // ضع مسار الصورة هنا
    about: "about.jpg",             // ضع مسار الصورة هنا
    contact: "contact.jpg"          // ضع مسار الصورة هنا
  };

}


function updateTotal() {
  const quantity = document.getElementById("quantity").value;
  const total = 125.0 * quantity;
  document.getElementById("total").textContent = $$
  {total.toFixed(2)};
}


const cartCountElement = document.getElementById('cart-count');
const addToCartButton = document.getElementById('add-to-cart-btn');
let cartCount = 0;

addToCartButton.addEventListener('click', function() {
    cartCount++; // زيادة العدد
    cartCountElement.textContent = cartCount;
});

const decreaseBtn = document.querySelector('.decrease');

const increaseBtn = document.querySelector('.increase');
const quantityInput = document.querySelector('.quantity input');

decreaseBtn.addEventListener('click', () => {
  let value = parseInt(quantityInput.value);
  if (value > 0) {
    quantityInput.value = value - 1;
  }
});

increaseBtn.addEventListener('click', () => {
  let value = parseInt(quantityInput.value);
  quantityInput.value = value + 1;
});