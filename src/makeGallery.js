import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function makeGallery(arr) {
  gallery.innerHTML = '';

  const resultsArr = arr
    .map(result => {
      return `<div class="photo-card">
 <a href="${result.largeImageURL}"> <img src="${result.webformatURL}" alt="${result.tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${result.likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${result.views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${result.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${result.downloads}
    </p>
  </div>
</div>`;
    })
    .join('');
  gallery.innerHTML = resultsArr;

  var lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export { gallery, makeGallery };
