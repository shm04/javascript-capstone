import booksCounter from './booksCounter.js';

describe('booksCounter', () => {
  it('should return the number of book divs in a section', () => {
    const section = {
      querySelectorAll: jest.fn(() => [
        {
          className: 'book-div',
        },
        {
          className: 'book-div',
        },
      ]),
    };

    expect(booksCounter(section)).toEqual(2);
  });

  it('should return 0 if there are no book divs in a section', () => {
    const section = {
      querySelectorAll: jest.fn(() => []),
    };

    expect(booksCounter(section)).toEqual(0);
  });
});