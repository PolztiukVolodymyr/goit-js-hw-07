import { galleryItems } from './gallery-items.js';

const galleryImageBox = document.querySelector(".gallery");
const markupImageBox = createImageMarkup(galleryItems);

galleryImageBox.insertAdjacentHTML("beforeend", markupImageBox);
galleryImageBox.addEventListener("click", onImageBoxClick);


function createImageMarkup (items) {
    return items.map((item) =>
  `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
       class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}"
       alt="${item.description}"/>
    </a>
  </div>`).join("");
     
};

function onImageBoxClick(event) {
  event.preventDefault();
  const modalImgShow = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${modalImgShow}" width="800" height="600">`);
  instance.show();
 
}
  
