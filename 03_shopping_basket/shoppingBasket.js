const Candy = require("./candy");

class shoppingBasket {

  constructor() {
    this.items = [];
    this.discount = 0;
  }

  addItem(item) {
    this.items.push(item)
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  
  getTotalPrice() {
    let total = 0;
      this.items.map((item) => {
      total += item.getPrice();
    });
      return total - this.discount;
  }
}

const candy = new Candy('Mars', 4.99);

const basket = new shoppingBasket();

basket.addItem(candy);
basket.addItem(new Candy("chocolate", 5.99));
basket.addItem(new Candy("marshmallows", 1.99));
basket.applyDiscount(1.99);
console.log(basket.getTotalPrice());

module.exports = shoppingBasket;