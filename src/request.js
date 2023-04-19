import axios from 'axios';

async function request(q, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      q: q,
      key: '35424227-7477ddb6a0c873051d8f25fc5',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: page,
    },
  });
  return response;
}

export default request;
