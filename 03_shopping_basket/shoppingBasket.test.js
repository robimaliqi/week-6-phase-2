const shoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
  describe('.addItem', () => {
    it('adds item to the basket', () => {
      const basket = new shoppingBasket();
      const candyDouble = { getName: () => 'Mars', getPrice: () => 4.99 };
      basket.addItem(candyDouble);
      expect(basket.items).toEqual([candyDouble])
    });
  });
  
  describe('.getTotalPrice', () => {
    it('returns the total price of the basket', () => {
      const basket = new shoppingBasket();
      const candyDouble = { getName: () => 'Mars', getPrice: () => 4.99 };
      basket.addItem(candyDouble);
      basket.addItem(candyDouble);
      expect(basket.getTotalPrice()).toEqual(9.98)
    });
  });

  describe('.applyDiscount', () => {
    it('applies a discount which gets subtracted from the total', () => {
      const basket = new shoppingBasket();
      const candyDouble = { getName: () => 'Mars', getPrice: () => 4.99 };
      basket.addItem(candyDouble);
      basket.applyDiscount(1.99);
      expect(basket.getTotalPrice()).toEqual(3.00)
    });
  });
});