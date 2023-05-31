const commentPop = async() => {
    try {
    const response = await fetch('https://openlibrary.org/authors/OL23919A/works.json?limit=22');
    const data = await response.json();

    const commentSection = document.createElement('div');
    
console.log(data.entries)
    data.entries.forEach((entry) => {
      
      const { title, covers, key, subjects, created, last_modified, latest_revision} = entry;

      if (!covers || covers.length === 0 || key !=="/works/OL82537W" ) {
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
      const subject = document.createElement('p');
      const create = document.createElement('p');
      const modified = document.createElement('p');
      const revision = document.createElement('p');
      bookTitle.className = 'book-title';
      bookTitle.textContent = title;
      subject.textContent = subjects[0]
      create.textContent = created.value
      modified.textContent = last_modified.value
      revision.textContent = latest_revision
      bookDiv.appendChild(bookTitle);
      bookDiv.appendChild(subject);
      bookDiv.appendChild(revision);
      bookDiv.appendChild(create);
      bookDiv.appendChild(modified);
      
      commentSection.appendChild(bookDiv);

      document.body.appendChild(commentSection)


    });
    return data;
  } catch (error) {
    return error;
  }
}

export default commentPop