import commentPop from './commentSection.js';

const apiUrl = 'https://openlibrary.org/authors/OL23919A/works.json?limit=21';

const displayBook = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const mainSection = document.querySelector('.main-section');

    data.entries.forEach((entry) => {
      const { title, covers, key } = entry;

      if (!covers || covers.length === 0) {
        return;
      }

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
      mainSection.appendChild(bookDiv);

      const commentBtn = document.createElement('button');
      commentBtn.className = 'comment-btn';
      commentBtn.textContent = 'Comments';

      bookDiv.appendChild(commentBtn);
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