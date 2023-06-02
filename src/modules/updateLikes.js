import { apiUrl, appId } from './urlAndId.js';

const updateLikes = async (id) => {
  const url = `${apiUrl}/apps/${appId}/likes/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const book = data.filter((item) => item.item_id === id);
    let like = book[0].likes;
    like += 1;
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
    });
    if (responseTwo.status === 200) {
      return 'Likes updated successfully!';
    }
    return data;
  } catch (error) {
    return error;
  }
};

export default updateLikes;
