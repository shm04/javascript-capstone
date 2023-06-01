

import x from './assets/x.png';
import Comment from './comment.js';
const gameId = "M37j4coTPdIjl1ZzHvRD"
const commentPop = async (id) => {
  try {
    const response = await fetch(`https://openlibrary.org/authors/OL23919A/works.json?limit=21`);
    const data = await response.json();
console.log(data)
    const commentSection = document.createElement('div');
    commentSection.className = 'comment';

    data.entries.forEach((entry) => {
      // const { title, covers, key, subjects, created, last_modified, latest_revision} = entry;
      const { title, covers, key } = entry;

      if (key !== id) {
        return;
      }

      const bookDiv = document.createElement('div');
      bookDiv.className = 'book-div';
      const firstCover = covers[0];
      const images = document.createElement('div');
      images.className = 'images';
      const bookCover = document.createElement('img');
      const close = document.createElement('img');
      close.className = 'close';
      bookCover.className = 'book-cover';
      bookCover.src = `https://covers.openlibrary.org/b/id/${firstCover}.jpg`;
      close.src = `${x}`;
      images.appendChild(bookCover);
      images.appendChild(close);
      bookDiv.appendChild(images);
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
      const revision = document.createElement('p');
      bookTitle.className = 'book-title';
      bookTitle.textContent = title;
      subject.textContent = `Subject: ${title}`;
      create.textContent = `Created: ${title}`;
      modified.textContent = `Modified: ${title}`;
      revision.textContent = `Revision: ${title}`;
      bookDiv.appendChild(bookTitle);
      left.appendChild(subject);
      left.appendChild(revision);
      right.appendChild(create);
      right.appendChild(modified);
      detail.appendChild(left);
      detail.appendChild(right);
      bookDiv.appendChild(detail);

      const commentContainer = document.createElement('div');
      const FormContainer = document.createElement('div');
      const commentHeading = document.createElement('h2');
      commentHeading.textContent = 'Comments (2)';
      const formHeading = document.createElement('h2');
      formHeading.textContent = 'Add comment';
      const form = document.createElement('form');
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = 'name';
      nameInput.placeholder = 'Your name';
      const textInput = document.createElement('input');
      textInput.type = 'textarea';
      textInput.name = 'texte';
      textInput.placeholder = 'Your Insights';
      const formBtn = document.createElement('button');
      formBtn.type = 'submit';
      formBtn.textContent = 'Comment';
      form.appendChild(formHeading);
      form.appendChild(nameInput);
      form.appendChild(textInput);
      form.appendChild(formBtn);
      commentContainer.appendChild(commentHeading);

      FormContainer.appendChild(form);
      commentContainer.appendChild(FormContainer);

      bookDiv.appendChild(commentContainer);
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
          const userComment = new Comment( key, nameInput.value.trim(),textInput.value.trim());
          console.log(userComment)
          form.reset();
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(userComment),
          };
     
          await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${gameId}/comments/`, options)
            .then((response) => console.log(response.json()));
        });
      




    });
    return data;
  } catch (error) {
    return error;
  }
};

export default commentPop;