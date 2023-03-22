import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageList = document.querySelector(".gallery");

export function createImageInfo(image) {
  allImagesInfo = image.reduce(
    (acc, image) => acc +
    `<div class="photo-card">
      <a class="gallery__item" href="${image.largeImageURL}">
       <img src="${image.largeImageURL}" alt="${image.tags}" width="300" loading="lazy" /></a>
         <div class="info">
           <p class="info-item">
           <b>💙 Likes: ${image.likes}</b>
           </p>
           <p class="info-item">
           <b>👁‍🗨 Views: ${image.views}</b>
           </p>
           <p class="info-item">
           <b>💬 Comments: ${image.comments}</b>
           </p>
           <p class="info-item">
           <b>⬇ Downloads: ${image.downloads}</b>
           </p>
         </div>
    </div>`,
    "");
//    imageList.innerHTML = allImagesInfo;
    imageList.insertAdjacentHTML("beforeend", allImagesInfo);
  };

 export function useSimpleLightBoxLibrary() {
    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    gallery.refresh();
  };