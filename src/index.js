import Notiflix from 'notiflix';
import request from './request';
import { gallery, makeGallery } from './makeGallery';

const form = document.querySelector('.search-form');
const input = document.querySelector('input[name="searchQuery"]');
const loadBtn = document.querySelector('button[type="button"]');

let page = 1;

loadBtn.classList.add('is-hidden');
input.addEventListener('input', () => (page = 1));

form.addEventListener('submit', loadCards);

async function loadCards(e) {
  try {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
      const results = await request(query, page);
      page += 1;
      const totalPages = results.data.totalHits / 40;
      if (results.data.totalHits === 0) {
        gallery.innerHTML = '';
        loadBtn.classList.remove('is-visible');
        loadBtn.classList.add('is-hidden');
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        makeGallery(results.data.hits);
        Notiflix.Notify.success(
          `Hooray! We found ${results.data.totalHits} images.`
        );
        loadBtn.classList.replace('is-hidden', 'is-visible');
        loadBtn.addEventListener('click', loadCards);
        if (page > totalPages) {
          loadBtn.classList.remove('is-visible');
          loadBtn.classList.add('is-hidden');
          Notiflix.Notify.failure(
            "We're sorry, but you've reached the end of search results."
          );
        }
      }
    }
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}
