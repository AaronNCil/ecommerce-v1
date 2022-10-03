let http = new XMLHttpRequest();

http.open('get', 'products.json', true);

http.send();

http.onload = function(){
   if (this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
   }


   let output = "";

   for(let item of products){
      output += `
      <section class="card">
      <div class="card-image">
          <img src="${item.image}" alt="prod1">
      </div>
      <div class="card-title">
          <h1>${item.name}</h1>
      </div>
      <div class="card-desc">
          <hr>
          <p class="desc"><i>${item.desc}</i></p>
      </div>
      <label><b>Price :</b>${item.price}</label>
      <div class="btn-2">Add to cart</div>
  </section>
      `
   }

   document.querySelector(".cards-container").innerHTML = output;
}

let products = 
[
  {
     "image": "images/airpodmax.jpg",
     "name": "Airpod Pro Maxes",
     "desc": "Noise cancellation headphones best quality with an even better style",
     "price":"$550"
  },
  {
      "image": "images/prodimg1.jpg",
      "name": "Beats Solo3",
      "desc": "Noise cancellation headphones best quality with an even better style",
      "price":"$131"
  },
  {
      "image": "images/prodimg2.jpg",
      "name": "Koss Prota Pro",
      "desc": "Noise cancellation headphones best quality with an even better style",
      "price":"$50"
  },
  {
   "image": "images/prodimg3.png",
   "name": "Steel Series Arctis 3",
   "desc": "Noise cancellation headphones best quality with an even better style",
   "price":"$70"
  },
  {
   "image": "images/prodimg4.png",
   "name": "Hyper X Cloud II",
   "desc": "Noise cancellation headphones best quality with an even better style",
   "price":"$70"
  },
  {
   "image": "images/prodimg5.png",
   "name": "Bose Quietcomfort",
   "desc": "Noise cancellation headphones best quality with an even better style",
   "price":"$229.00"
  },
  {
   "image": "images/prodimg6.png",
   "name": "Razer Kraken X",
   "desc": "Noise cancellation headphones best quality with an even better style",
   "price":"$550"
  },
  {
   "image": "images/prodimg7.png",
   "name": "Sony wh- 1000xm5",
   "desc": "Noise cancellation headphones best quality with an even better style",
   "price":"$400"
  },
  {
   "image": "images/prodimg8.png",
   "name": "JBL Tune 510BT ",
   "desc": "Noise cancellation headphones best quality with an even better style",
   "price":"50"
  },
  {
   "image": "images/prodimg9.png",
   "name": "Marshall Major IV",
   "desc": "Noise cancellation headphones best quality with an even better style",
   "price":"$107"
  },
  {
   "image": "images/prodimg10.png",
   "name": "Sennheiser Momentum 4 Wireless",
   "desc": "Noise cancellation headphones best quality with an even better style",
   "price":"$350"
  },
  {
   "image": "images/prodimg11.png",
   "name": "Bang & Olufsen",
   "desc": "Noise cancellation headphones best quality with an even better style",
   "price":"$500"
  }
]



// image slider

let images = [
  {
    imageUrl:`https://external-preview.redd.it/KLnRW5JtTZ1SJSDdOnGM75noq0uxLuWmjegpfLFhavw.jpg?auto=webp&s=dc3630aae0157295ceee48b9a6e0a62a31d3fde2`
  },
  {
    imageUrl:`https://get.wallhere.com/photo/AKG-headphones-1876947.jpg`
  },
  {
    imageUrl:`https://www.samma3a.com/tech/en/wp-content/uploads/sites/2/2017/11/IMG_0032-768x432.jpg`
  },
]

function startUp() {
  document.getElementById('image1').src = images[0].imageUrl;
}

// let globalIndex = 0;

// function next() {
//     globalIndex++;
//   if (globalIndex > images.length) {
//     globalIndex = 0;
//   }
//   document.getElementById('image1').src = images[globalIndex].imageUrl;
// }

function chooseImage(imageIndex) {
  document.getElementById('image1').src = images[imageIndex].imageUrl;
}

