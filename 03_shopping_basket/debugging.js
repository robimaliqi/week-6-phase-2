const Candy = require("./candy");

class ShoppingBasket {
  constructor() {
    this.basket = []
    this.discount = 0;
  }

  addItem(item) {
    this.basket.push(item)
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }
}
const candy = new Candy('Mars', 4.99);
const basket = new ShoppingBasket();
basket.addItem(candy);
basket.applyDiscount(1.99);
console.log(basket.getTotalPrice());



module.exports = ShoppingBasket;