let request = new XMLHttpRequest();
// opens up a new object called request

request.open('get', 'products.json', true);
//opens the request and fetches the files products.json

request.send();
// sends the request

// onload catches the request and says when the page is loaded to run the function
request.onload = function(){

   let products = JSON.parse(this.responseText);
// the products variable parses the json file so that javscript can read the object
   let output = "";
// empty output variable to hold the output after its been defined
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
// targets the cards container's inner html and displays the output
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


//the function startup loads the first image when the page is loaded
function startUp() {
  document.getElementById('image1').src = images[0].imageUrl;
}

//the function for the image slider thats targeted in my html with different imageindex's
function chooseImage(imageIndex) {
  document.getElementById('image1').src = images[imageIndex].imageUrl;
}


// search bar products page

function searchProduct() {
  let input = document.getElementById('searchBar').value // takes input from searchbar
  input=input.toLowerCase();
  let x = document.getElementsByClassName('card-title'); // grabs everything with product-item class and stores it in a array.
  let y = document.getElementsByClassName('card');

  for (i = 0; i < x.length; i++) {   // loops through product-item's to search.
      if (!x[i].innerHTML.toLowerCase().includes(input)) { // while loop runs, it runs through every object with the product-item class and
          y[i].style.display="none";                       // if it includes the input it will display as block, if it does not it will display as none
      }
      else {
          y[i].style.display="block";
      }
  }
}