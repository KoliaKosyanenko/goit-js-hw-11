import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const galleryElement = document.getElementById('gallery');
  galleryElement.innerHTML = '';

  images.forEach(image => {
    const cardHTML = `
      <div class="gallery">
        <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" class="card-img-top"></a>
        <div class="card-body">
          <p class="card-text">Likes: ${image.likes}</p>
          <p class="card-text">Views: ${image.views}</p>
          <p class="card-text">Comments: ${image.comments}</p>
          <p class="card-text">Downloads: ${image.downloads}</p>
        </div>
      </div>
    `;
    galleryElement.insertAdjacentHTML('beforeend', cardHTML);
  });
    
    new SimpleLightbox('.gallery');
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}
