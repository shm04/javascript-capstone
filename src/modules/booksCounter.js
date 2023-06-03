const booksCounter = (section) => {
  let divCount = 0;
  const divs = section.querySelectorAll('.book-div');
  for (let i = 0; i < divs.length; i += 1) {
    divCount += 1;
  }
  return divCount;
};

export default booksCounter;