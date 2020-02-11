var faker = require("faker");

const greet = function() {
  console.log("~~~~~~~~~~~~~~~~~~~~~~");
  console.log(" Welcome to my Store!");
  console.log("~~~~~~~~~~~~~~~~~~~~~~");
};

//create storefront for n items
const myShop = function(n) {
  greet();
  for (i = 0; i < n; i++) {
    createProduct();
  }
};

const createProduct = function() {
  var product = faker.commerce.productName();
  var price = faker.commerce.price();
  console.log(product + " - $" + price);
};

myShop(12);
