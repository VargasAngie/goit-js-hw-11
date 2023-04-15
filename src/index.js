import Notiflix from 'notiflix';
import request from './request';
import makeGallery from './makeGallery';

const form = document.querySelector(".search-form");
const input = document.querySelector('input[name="searchQuery"]');

form.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
        const results = await request(query);

        if (results.data.hits.length === 0) {
            Notiflix.Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
            );
        } else makeGallery(results.data.hits);
    }
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
});
