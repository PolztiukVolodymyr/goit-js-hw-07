import { galleryItems } from './gallery-items.js';

const galleryImageBox = document.querySelector(".gallery");
const markupImageBox = createImageMarkup(galleryItems);

galleryImageBox.insertAdjacentHTML("beforeend", markupImageBox);
galleryImageBox.addEventListener("click", onImageBoxClick);

function createImageMarkup (items) {
    return items.map((item) =>
  `<li>
    <a class="gallery__link" href="${item.original}">
      <img
       class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}"
       alt="${item.description}"/>
    </a>
  </li>`).join("");
     
};

function onImageBoxClick(event) {
  event.preventDefault();
};

new SimpleLightbox('.gallery a',{captionsData: "alt", captionDelay: 250});



