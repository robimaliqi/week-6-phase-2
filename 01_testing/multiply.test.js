const multiply = require('./multiply')

describe('multiply', () => {
  it('multiplies 3 and 6', () => {
    expect(multiply(3, 6)).toBe(18);
  });

  it('multiplies 5 and 5', () => {
    expect(multiply(5, 5)).toBe(25);
  });
});