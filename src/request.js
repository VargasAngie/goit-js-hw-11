import axios from 'axios';

async function request(q) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      q: q,
      key: '35424227-7477ddb6a0c873051d8f25fc5',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response;
}

export default request;
