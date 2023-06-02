import { apiUrl, appId } from './urlAndId.js';

const updateLikes = async () => {
  const url = `${apiUrl}/apps/${appId}/likes/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    let like = data[0].likes;
    like = 100;

    const requestBody = {
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
