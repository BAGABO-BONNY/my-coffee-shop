let navbar = document.querySelector('.navbar');
let searchform = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
    navbar.classList.remove('active');
    searchform.classList.toggle('active');
    cartItem.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = () => {
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartItem.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartItem.classList.remove('active');
};

let cartBtn = document.querySelector('#cart-btn');
let isOpen = false;

cartBtn.addEventListener('click', () => {
    isOpen = !isOpen; // Toggle isOpen between true and false
    
    if (isOpen) {
        cartItem.style.display = 'block'; // Display the cart items container
    } else {
        cartItem.style.display = 'none'; // Hide the cart items container
    }
});


document.getElementById('search-btn').addEventListener('click', function() {
    document.getElementById('search-form').classList.toggle('active');
  });
  
  document.getElementById('cart-btn').addEventListener('click', function() {
    document.getElementById('cart-items-container').classList.toggle('active');
  });
  