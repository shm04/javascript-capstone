import x from './assets/x.png';
import Comment from './comment.js';

const gameId = 'M37j4coTPdIjl1ZzHvRD';
const commentPop = async (id) => {
  try {
    const response = await fetch('https://openlibrary.org/authors/OL23919A/works.json?limit=21');
    const data = await response.json();

    const commentSection = document.createElement('div');
    commentSection.className = 'comment';

    data.entries.forEach((entry) => {
      if (entry.key !== id) {
        return;
      }

      const bookDiv = document.createElement('div');
      bookDiv.className = 'book-div';
      const firstCover = entry.covers[0];

      const bookCover = document.createElement('img');
      const close = document.createElement('img');
      close.className = 'close';
      bookCover.className = 'book-cover';
      bookCover.src = `https://covers.openlibrary.org/b/id/${firstCover}.jpg`;
      close.src = `${x}`;

      bookDiv.appendChild(bookCover);
      const detail = document.createElement('div');
      detail.className = 'detail';
      const left = document.createElement('div');
      const right = document.createElement('div');
      left.className = 'left';
      right.className = 'right';

      const bookTitle = document.createElement('p');
      const subject = document.createElement('p');
      const create = document.createElement('p');
      const modified = document.createElement('p');
      const revisionP = document.createElement('p');
      bookTitle.className = 'book-title';
      bookTitle.textContent = entry.title;

      subject.textContent = `Subject: ${entry.title}`;
      create.textContent = `Created: ${entry.created.value}`;
      modified.textContent = `Modified: ${entry.last_modified.value}`;
      revisionP.textContent = `Revision: ${entry.revision}`;
      bookDiv.appendChild(bookTitle);
      left.appendChild(create);
      left.appendChild(subject);
      right.appendChild(modified);
      right.appendChild(revisionP);

      detail.appendChild(left);
      detail.appendChild(right);
      bookDiv.appendChild(detail);

      const commentContainer = document.createElement('div');
      commentContainer.className = 'display';
      const FormContainer = document.createElement('div');
      const commentHeading = document.createElement('h2');
      commentHeading.textContent = 'Comments (2)';
      const formHeading = document.createElement('h2');
      formHeading.textContent = 'Add a comment';
      const form = document.createElement('form');
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = 'name';
      nameInput.placeholder = 'Your name';
      const textInput = document.createElement('textarea');
      textInput.rows = 5;
      textInput.placeholder = 'Your Insights';
      const formBtn = document.createElement('button');
      formBtn.type = 'submit';
      formBtn.textContent = 'Comment';
      form.appendChild(formHeading);
      form.appendChild(nameInput);
      form.appendChild(textInput);
      form.appendChild(formBtn);

      const commentList = document.createElement('ul');
      const getComments = async () => {
        const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${gameId}/comments?item_id=${id}`);
        const resdata = await res.json();

        if (resdata.length > 0) {
          resdata.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;
            commentList.appendChild(listItem);
          });
        }
      };
      getComments();

      commentContainer.appendChild(commentHeading);
      commentContainer.appendChild(commentList);

      FormContainer.appendChild(form);
      commentContainer.appendChild(FormContainer);

      bookDiv.appendChild(commentContainer);
      commentSection.appendChild(close);
      commentSection.appendChild(bookDiv);
      const blur = document.createElement('div');
      blur.className = 'blur';
      document.body.appendChild(commentSection);
      document.body.appendChild(blur);

      close.addEventListener('click', () => {
        commentSection.style.display = 'none';
        blur.classList.remove('blur');
      });

      formBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const userComment = new Comment(entry.key, nameInput.value.trim(), textInput.value.trim());

        form.reset();
        getComments()
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(userComment),
        };
        try {
          const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${gameId}/comments/`, options);
          const posted = await res.json();
          return posted;
          
        } catch (error) {
          return error;
        }
      
      });
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default commentPop;