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
    const cartContent = await myresponse.json();
    console.log(cartContent);
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
const cartToggler = document.querySelectorAll('.cart-toggler');
const miniCart = document.querySelector('#minicart');
const body = document.querySelector('body');

async function toggleMinicart(){
  miniCart.classList.toggle('active');
  body.classList.toggle('noscroll');
  if (miniCart.classList.contains('active')){
    // populateMinicart();
    // console.log('go');
    try{
      const httpResponse = await fetch('/cart');
      const cartContent = await httpResponse.json();
      console.log(cartContent);
      // return(cart);
      populateMinicart(cartContent.cart);
    }catch(e){
      console.log('feth error');
    }
  }
}
async function populateMinicart(cartContent){
  // console.log(JSON.stringify(cartContent));
  const container = document.querySelector('#cart-content');
  cartContent.forEach((cartLine)=>{
    const template = document.querySelector('#cart-line');
    const clone = template.content.cloneNode(true);
    clone.querySelector('[slot="name"]').textContent = cartLine.productName;
    clone.querySelector('[slot="quantity"]').textContent = "x" + cartLine.quantity;
    clone.querySelector('[slot="total"]').textContent =` ${cartLine.quantity * cartLine.unitPrice}€`;

    container.appendChild(clone);
  })
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