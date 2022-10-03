let request = new XMLHttpRequest();

request.open('get', 'products.json', true);

request.send();

request.onload = function(){

   let products = JSON.parse(this.responseText);

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
      <label><b>Price: </b>${item.price}</label>
      <div class="btn-2">Add to cart</div>
  </section>
      `
   }

   document.querySelector(".cards-container").innerHTML = output;
}


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

function chooseImage(imageIndex) {
  document.getElementById('image1').src = images[imageIndex].imageUrl;
}

