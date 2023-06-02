import { apiUrl, appId } from './urlAndId.js';

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

export default createLike;