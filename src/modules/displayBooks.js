import commentPop from './commentSection.js';
import getLikes from './getLikes.js';
import createLike from './createLikes.js';
import updateLikes from './updateLikes.js';

const apiUrl = 'https://openlibrary.org/authors/OL23919A/works.json?limit=18';

const displayBook = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const mainSection = document.querySelector('.main-section');

    let bookCount = 0;

    data.entries.forEach(async (entry) => {
      const { title, covers, key } = entry;

      if (!covers || covers.length === 0) {
        return;
      }

      bookCount += 1;
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

      const likeBtn = document.createElement('button');
      likeBtn.className = 'like-btn';
      likeBtn.innerHTML = `<span class="material-symbols-outlined">
      favorite</span>`;
      const bookLikesElement = document.createElement('p');

      const updateLike = async () => {
        const likesData = await getLikes();
        // console.log(likesData)
        const bookLikes = likesData.find((item) => item.item_id === key);
        const likes = bookLikes ? bookLikes.likes : 0;
        bookLikesElement.textContent = `Likes: ${likes}`;
      };

      bookDiv.appendChild(likeBtn);

      bookLikesElement.className = 'book-likes';

      updateLike();

      bookDiv.appendChild(bookLikesElement);

      likeBtn.addEventListener('click', async () => {
        await updateLikes(key);
        updateLike();
      });

      const commentBtn = document.createElement('button');
      commentBtn.className = 'comment-btn';
      commentBtn.textContent = 'Comments';

      bookDiv.appendChild(commentBtn);
      mainSection.appendChild(bookDiv);

      commentBtn.addEventListener('click', () => {
        commentPop(key);
      });
    });

    const bookCounter = document.querySelector('.count-books');
    bookCounter.innerHTML = `Books(${bookCount})`;
    return data;
  } catch (error) {
    return error;
  }
};
export default displayBook;