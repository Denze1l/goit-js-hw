"use strict";

import photos from "./photo.js";

const refs = {
  gallery: document.querySelector(".gallery"),
  lightbox: document.querySelector(".lightbox"),
  aLink: document.querySelector(".gallery__link"),
  ligthImage: document.querySelector(".lightbox___image"),
  backdrop: document.querySelector(".lightbox__overlay")
};

let count = 0;

const photo = photos
  .map(
    ({ preview, original }) => `<li class="gallery__item">
<a

>
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${photos[count++].description}"
  />

  <span class="gallery__icon">
    <i class="material-icons">zoom_out_map</i>
  </span>
</a>
</li>`
  )
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", photo);
console.log(photo);

const bigPhoto = event => {
  window.addEventListener("keydown", pressEsc);
  refs.lightbox.classList.add("is-open");
  let evryPhoto = `${event.target.dataset.source}`;

  refs.ligthImage.setAttribute("src", evryPhoto);
};

 const closePhoto =()=>{
  window.removeEventListener("keydown", pressEsc);
 };
const backdropClose = event =>{
  if(event.target.parentElement.dataset.action){
    refs.lightbox.classList.remove("is-open");
    console.log('close')
  }
  console.log(event.currentTarget)
   if (event.target.nodeName !== "IMG") {
    refs.lightbox.classList.remove("is-open");
   }
}

refs.gallery.addEventListener("click", bigPhoto);
refs.lightbox.addEventListener("click", backdropClose);
refs.lightbox.addEventListener("click", closePhoto);

const pressEsc = e => {
  if (e.code !== "Escape") {
    return
  };
  refs.lightbox.classList.remove("is-open");
  console.log(e);
  
  closePhoto()
};
