function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  // Product table
  function createArticleList(){
    const products = {
      title: ["Pure CSS - Cascading liquor", "Webdev - Night balm", "Javanese Scriptography", "Dom Pérignon"],
      url: ["#", "article2","#","#"],
      imgSrc: ["pure-css", "webdev-night-balm", "javanese-scriptography", "dom-perignon"],
      description:["<p>Made out of the pristine waters from the <em>Styling Springs</em> of Arizona, <i>Pure CSS</i> is a cascade of flavour guaranteed to soften the mood after long days of feral DOM riding.</p>", " <p>Improve your coding skills overnight with the brand new Webdev night balm. Harness the power of quantic science and bovine dejections as the benefits of this product has never been scientifically proved but, let's be honest, no one really cares about that.</p>", " <p>A deep dive into <em>confusing book titles</em> along human History.</p>", "<p>Client side wine from the sunbathed hills of <em>Dominican Republic</em>.</p>"],
      price:[13.53, 49.99, 35.46, 45.33]
    }
    let htmlContent = "";
    for (let i = 0; i < products.title.length; i++){
       htmlContent += `<article><figure><img src="assets/img/${products.imgSrc[i]}-200W.jpg" alt="alt"width="200" height="200">
       <figcaption><h2><a href="product?product=${products.url[i]}.html">${products.title[i]}</a></h2></figcaption>
   </figure>
   
   <div>
   ${products.description[i]}.</p>
   </div><button>View more</button><button>Add to cart</button><span>${products.price[i]} €</span> </article>`;
    }
    document.querySelector('*[aria-label="Liste d\'articles"]').innerHTML = htmlContent;
  }
