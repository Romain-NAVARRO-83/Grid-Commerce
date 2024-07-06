
// Minicart
const cartToggler = document.querySelectorAll('.cart-toggler');
const miniCart = document.querySelector('#minicart');
const body = document.querySelector('body');

function toggleMinicart(){
  miniCart.classList.toggle('active');
  body.classList.toggle('noscroll');
}

cartToggler.forEach((toggler)=>{
  toggler.addEventListener('click',()=>{
    toggleMinicart();
  })
});

// overlay insertion
document.addEventListener("DOMContentLoaded", function(){
  const overlay  = document .createElement('div');
  overlay.id ="overlay";
  document.querySelector('main').appendChild(overlay);
  overlay.addEventListener('click',()=>{
    toggleMinicart();
  })
});