//Making a class for all products. 
class Product {
    //Constructor in which name is passed. Setters are further used to set image and description to make the code clean and simple to use
    constructor(product_name) {
        this.name = product_name;
        this.image = null;
        this.description = null;
    }

    //getting the name of the product
    getName() {
        return this.name;
    }

    //Setting the image source
    set Image(product_image) {
        this.image = product_image;
    }

    //Getting the image source
    getImage() {
        return this.image;
    }

    //Setting the description of the product
    set Description(product_description) {
        this.description = product_description;
    }

    //Getting the description of the product
    getDescription() {
        return this.description;
    }
}
//Making an empty array of products
var Products = [];

//Making a product and pusing it to the Products array
//Product 1
var LiverCare = new Product("LiverCare");
LiverCare.Image = "images/LiverCare.png";
LiverCare.Description = "Improve your liver functions.";
Products.push(LiverCare);

//Product 2
var BrainCare = new Product("BrainCare");
BrainCare.Image = "images/BrainCare.png";
BrainCare.Description = "Improve the brain activity and make it fitter.";
Products.push(BrainCare);

//Product 3
var BowelCare = new Product("BowelCare");
BowelCare.Image = "images/BowelCare.png";
BowelCare.Description = "Improve your digestive system.";
Products.push(BowelCare);

//Product 4
var Probiotic = new Product("Probiotic");
Probiotic.Image = "images/Probiotic.png";
Probiotic.Description = "Improve your health and makes your metabolism faster.";
Products.push(Probiotic);

//getting the div where products will be generated
var div = document.getElementById('products_list')
total_products = Products.length;
//Looping through all products
for (var i = 0; i < total_products; i++) {
    //adding the HTML needed for the products card to the HTML
    div.innerHTML = div.innerHTML + `
    <div class="col mb-4">
    <div class="card">
        <img src="${Products[i].image}" class="card-img-top med-logo">
        <div class="card-body ">
            <h5 class="card-title ">${Products[i].name}</h5>
            <p class="card-text content">${Products[i].description}</p>
        </div>
    </div>
</div>
  `
}