import { apiUrl, appId } from './urlAndId.js';

const getLikes = async () => {
  const url = `${apiUrl}/apps/${appId}/likes`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default getLikes;