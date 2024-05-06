
import { searchImages } from './js/pixabay-api.js';
import { showError, renderGallery } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();

    if (query !== '') {
      searchImages(query)
        .then(images => {
          if (images.length === 0) {
            showError(
              'Sorry, there are no images matching your search query. Please try again!'
            );
          } else {
            renderGallery(images);
          }
        })
        .catch(error => {
          showError(
            'An error occurred while fetching data. Please try again later.'
          );
        });
    } else {
      showError('Please enter a search query.');
    }
  });
});