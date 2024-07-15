// Add to cart
const addForms = document.querySelectorAll('form[action="/cart"]');
// Init
addForms.forEach((addForm)=>{
  addForm.addEventListener('submit',async (event)=>{
    event.preventDefault();
    const data = new FormData(addForm);
    const myresponse = await fetch(addForm.action, {
      method:'POST',
      headers: { "Content-Type": "application/json" },
       body: JSON.stringify(Object.fromEntries(data))
    });

      cartToken();

  })
})

// async function addToCart(formData){
// try{

//   const httpResponse = await fetch(`/cart`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData)
//   });
  
  // Gestion d'erreur
//   if (! httpResponse.ok) {
//     console.log(httpResponse);
//     return null;
//   }

//   const addedProduct = await httpResponse.json();
//   return addedProduct;
// }catch(e){
//   console.error(e);
//   return null;
// }
// }




// Minicart

// get cart
async function getCart(){
  try{
    const httpResponse = await fetch('/cart');
    const cartContent = await httpResponse.json();
    // console.log(cartContent.cart);
    return(cartContent.cart);
  }catch(e){
    console.log(e);
  }
}
const cartToggler = document.querySelectorAll('.cart-toggler');
const miniCart = document.querySelector('#minicart');
const body = document.querySelector('body');

async function toggleMinicart(){
  miniCart.classList.toggle('active');
  body.classList.toggle('noscroll');
  if (miniCart.classList.contains('active')){
    const cart = await getCart();
    console.log(cart);
    if(cart.length > 0){
      populateMinicart(cart);
    }else{
      document.querySelector('#minicart > .flexcol > h4').innerHTML = `Your cart is empty`;
    }
    
    
  }
}
async function populateMinicart(cartContent){
  // console.log(JSON.stringify(cartContent));
  const container = document.querySelector('#cart-content');
  container.innerHTML = '';
  // if (cartContent.length < 1){
    
  // }else{
    cartContent.forEach((cartLine)=>{
      const template = document.querySelector('#cart-line');
      const clone = template.content.cloneNode(true);
      clone.querySelector('[slot="name"]').textContent = cartLine.productName;
      clone.querySelector('[slot="quantity"]').textContent = "x" + cartLine.quantity;
      clone.querySelector('[slot="total"]').textContent =` ${cartLine.quantity * cartLine.unitPrice}€`;
  
      container.appendChild(clone);
    })
    // Cart bottom
    if (document.querySelector('#minicart-action.flexcol')){
      document.querySelector('#minicart-action.flexcol').remove();
    }
  const template = document.querySelector('#minicartaction');
  const cartBottom = template.content.cloneNode(true);
  document.querySelector('#minicart').appendChild(cartBottom);
  document.querySelector('#minicart-action').classList.add('flexcol');
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

// header cart count token
async function cartToken(){
  const cart = await getCart();
  const container = document.querySelector('.cart-toggler');
  const previousSpan = container.querySelector('span');
  if (previousSpan){
    previousSpan.remove();
  }
  const token = document .createElement('span');
  token.id = 'cart-token';
  token.textContent = cart.length;
  container.appendChild(token);

}

// Anchor Nav
const nav = document.querySelector('#anchor-nav');
console.log(nav);
if (nav){
  // console.log(document.querySelector('body.product'));
  window.onscroll = function() {updateAnchorNav()};

}
function updateAnchorNav(){
  const currentScroll = window.scrollY ;
  console.log("curent : " + currentScroll);
  const navs = document.querySelectorAll('#anchor-nav li a');
  navs.forEach(nav =>{
    const targetId = nav.getAttribute('href').replace('#','');
    const target = document.querySelector(`#${targetId}`);
    const absolutePosition = {
      top : target.getBoundingClientRect().top + window.scrollY,
      bottom : target.getBoundingClientRect().bottom + window.scrollY
    }
    if(targetId === 'documentation'){
      console.log(`${nav} : Target : ${absolutePosition.top } ${absolutePosition.bottom}`);
    }
    if (isOnScreen(target))
    {
      nav.classList.add('active');
    }else{
      nav.classList.remove('active');
    }
  })

}
function isOnScreen(element) {
  let rect = element.getBoundingClientRect();
  let scrollTop = window.scrollY + window.outerHeight/2;

  let elementTop = rect.top + scrollTop;
  let elementBottom = elementTop + rect.height;

  const topTester = scrollTop + 200
  const bottomTester = scrollTop + window.outerHeight * 0.6;

  return elementTop < bottomTester  && elementBottom > bottomTester;
}

$('.slick-1').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  infinite: true,
  speed: 300,
  buttons: true
});

$('.slick-1234').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});