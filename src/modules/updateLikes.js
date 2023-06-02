import { apiUrl, appId } from './urlAndId.js';

const updateLikes = async (id) => {
  const url = `${apiUrl}/apps/${appId}/likes/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    let book = data.filter((item) => item.item_id === id)
    //console.log(book)
    let like = book[0].likes
    like++
//console.log(like)
    const requestBody = {
      item_id: id,
      likes: like,
    };

    const responseTwo = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const err = responseTwo.json()
    console.log(err)
    if (responseTwo.status === 200) {
      console.log('Likes updated successfully!');
    } else {
      console.log('Error occurred while updating likes.');
    }
    return data;
  } catch (error) {
    return error;
  }
};

export default updateLikes;
