import commentPop from './commentSection.js';
import getLikes from './getLikes.js';
import createLike from './createLikes.js';
import heart from './assets/heart.png';

const apiUrl = 'https://openlibrary.org/authors/OL23919A/works.json?limit=21';

const displayBook = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const mainSection = document.querySelector('.main-section');

    data.entries.forEach(async (entry) => {
      const { title, covers, key } = entry;

      if (!covers || covers.length === 0) {
        return;
      }

      createLike(key);

      const bookDiv = document.createElement('div');
      bookDiv.className = 'book-div';

      const firstCover = covers[0];
      const bookCover = document.createElement('img');
      bookCover.className = 'book-cover';
      bookCover.src = `https://covers.openlibrary.org/b/id/${firstCover}.jpg`;

      bookDiv.appendChild(bookCover);

      const bookTitle = document.createElement('p');
      bookTitle.className = 'book-title';
      bookTitle.textContent = title;

      bookDiv.appendChild(bookTitle);

      const likesData = await getLikes();
      const bookLikes = likesData.find((item) => item.item_id === key);
      const likes = bookLikes ? bookLikes.likes : 0;

      const likeBtn = document.createElement('button');
      likeBtn.className = 'like-btn';
      likeBtn.innerHTML = `<img src="${heart}" alt="heart">`;
      const bookLikesElement = document.createElement('p');
      likeBtn.addEventListener('click', async () => {
        // need to write a function that once i click the likeBtn the count increase in the object(API) and in the screen
      });
      bookDiv.appendChild(likeBtn);

      bookLikesElement.className = 'book-likes';
      bookLikesElement.textContent = `Likes: ${likes}`;

      bookDiv.appendChild(bookLikesElement);

      const commentBtn = document.createElement('button');
      commentBtn.className = 'comment-btn';
      commentBtn.textContent = 'Comments';

      bookDiv.appendChild(commentBtn);
      mainSection.appendChild(bookDiv);

      commentBtn.addEventListener('click', () => {
        commentPop(key);
      });
    });
    return data;
  } catch (error) {
    return error;
  }
};
export default displayBook;