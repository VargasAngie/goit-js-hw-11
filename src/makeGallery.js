const gallery = document.querySelector('.gallery');

function makeGallery(arr) {
  const resultsArr = arr
    .map(result => {
      return `<div class="photo-card">
  <img src="${result.webformatURL}" alt="${result.tags}" loading="lazy" />
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
}

export default makeGallery;
