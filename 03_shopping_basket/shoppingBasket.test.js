const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
  describe('.addItem', () => {
    it('adds item to the basket', () => {
      const items = new ShoppingBasket();
      const candyDouble = { getName: () => 'Mars', getPrice: () => 4.99 };
      items.addItem(candyDouble);
      expect(items.basket).toEqual([candyDouble])
    });
  });
  
  describe('.getTotalPrice', () => {
    it('returns the total price of the basket', () => {
      const items = new ShoppingBasket();
      const candyDouble = { getName: () => 'Mars', getPrice: () => 4.99 };
      items.addItem(candyDouble);
      expect(items.getTotalPrice()).toEqual(4.99)
    });
  });
});