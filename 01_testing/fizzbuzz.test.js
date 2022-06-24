const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('returns Bizz for multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns Buzz for multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns FizzBuzz for multiple of 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns a number if not multipe of 3, 5, 15', () => {
    expect(fizzBuzz(4)).toBe(4);
  })
});