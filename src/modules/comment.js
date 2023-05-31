const commentPop = async(id) => {
    try {
    const response = await fetch('https://openlibrary.org/authors/OL23919A/works.json?limit=22');
    const data = await response.json();

    const commentSection = document.createElement('div');
    commentSection.className = "comment"
    
console.log(data.entries)
    data.entries.forEach((entry) => {
      
      const { title, covers, key, subjects, created, last_modified, latest_revision} = entry;

      if (!covers || covers.length === 0 || key !== id ) {
        return;
      }

      const bookDiv = document.createElement('div');
      bookDiv.className = 'book-div';

      const firstCover = covers[0];
      const bookCover = document.createElement('img');
      bookCover.className = 'book-cover';
      bookCover.src = `https://covers.openlibrary.org/b/id/${firstCover}.jpg`;

      bookDiv.appendChild(bookCover);
      const detail = document.createElement("div")
      detail.className = "detail"
      const left = document.createElement("div")
      const right = document.createElement("div")
      left.className = "left"
      right.className = "right"
      const bookTitle = document.createElement('p');
      const subject = document.createElement('p');
      const create = document.createElement('p');
      const modified = document.createElement('p');
      const revision = document.createElement('p');
      bookTitle.className = 'book-title';
      bookTitle.textContent = title;
      subject.textContent = "Subject: " + subjects[0]
      create.textContent = "Created: " + created.value
      modified.textContent = "Modified: " + last_modified.value
      revision.textContent = "Revision: " + latest_revision
      bookDiv.appendChild(bookTitle);
      left.appendChild(subject);
      left.appendChild(revision);
      right.appendChild(create);
      right.appendChild(modified);
      detail.appendChild(left)
      detail.appendChild(right)
      bookDiv.appendChild(detail);      
      commentSection.appendChild(bookDiv);
      document.body.appendChild(commentSection)
    });
    return data;
  } catch (error) {
    return error;
  }
}



export default commentPop