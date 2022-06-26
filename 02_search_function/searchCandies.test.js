const  searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns candies that start with "Ma" and are under 10 price', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
});