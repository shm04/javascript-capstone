import './styles/main.css';
import displayBook from './modules/displayBooks.js';
import displayLikes from './modules/displayLikes.js';

window.addEventListener('load', () => {
  displayBook();
  displayLikes();
});
