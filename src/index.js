import './styles/main.css';

import displayBook from './modules/displayBooks.js';

window.addEventListener('load', () => {
  displayBook();
});

// console.log('-------------------------------');

// const responseThree = await fetch('https://openlibrary.org/authors/OL23919A/works.json?limit=6');
// const dataThree = await responseThree.json();

// console.log(dataThree);

// console.log(dataThree.entries[0].title);
// console.log(dataThree.entries[0].covers[0]);

// dataThree.entries.forEach((entry) => {
//   const title = entry.title;
//   console.log(title);
// });
