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