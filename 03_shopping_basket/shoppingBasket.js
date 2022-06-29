const Candy = require("./candy");

class ShoppingBasket {

  constructor() {
    this.basket = [];
  }

  addItem(item) {
    this.basket.push(item)
  }

  
  getTotalPrice() {
    let total = 0;
      this.basket.map((item) => {
      return total += item.getPrice();
    });
      return total;
  }
}

// const candy = new Candy('Mars', 4.99);

// const basket = new ShoppingBasket();

// basket.addItem(candy);
// basket.addItem(new Candy("chocolate", 5.99));
// basket.addItem(new Candy("marshmallows", 1.99));

module.exports = ShoppingBasket;