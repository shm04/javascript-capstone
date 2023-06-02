import './styles/main.css';
import displayBook from './modules/displayBooks.js';
import updateLikes from './modules/updateLikes.js';

window.addEventListener('load', () => {
  displayBook();
  updateLikes();
});
