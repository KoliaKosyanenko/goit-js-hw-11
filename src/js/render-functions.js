import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const galleryElement = document.querySelector('.gallery');
  galleryElement.innerHTML = '';

  images.forEach(image => {
    const cardHTML = `
      <li class="gallery-container">
        <a href="${image.largeImageURL}" title="${image.tags}">
          <img src="${image.webformatURL}" alt="${image.tags}" class="card-img-top">
        </a>
        <div class="card-body">
          <p class="card-text"><span>Likes:</span> ${image.likes}</p>
          <p class="card-text"><span>Views:</span> ${image.views}</p>
          <p class="card-text"><span>Comments:</span> ${image.comments}</p>
          <p class="card-text"><span>Downloads:</span> ${image.downloads}</p>
        </div>
      </li>
    `;
    galleryElement.insertAdjacentHTML('beforeend', cardHTML);
  });
  const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
    hideLoading();
}

export function showLoading() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

export function hideLoading() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', () => {
  showLoading();
});

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}
