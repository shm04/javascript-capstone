const displayLikes = async () => {
  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
  const appId = 'xsMgySSOLdWVdMRKDgjB';

  const createLike = async (itemId) => {
    const url = `${apiUrl}/apps/${appId}/likes`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
      }),
    };

    try {
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      return error;
    }
  };

  const getLikes = async () => {
    const url = `${apiUrl}/apps/${appId}/likes`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  };

  createLike();
  getLikes();
};
export default displayLikes;