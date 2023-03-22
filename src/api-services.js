import Notiflix from 'notiflix';
import axios from "axios";
import LoadMoreButton from './load-more';
import { createImageInfo } from "./create_html_elem";
import { useSimpleLightBoxLibrary } from './create_html_elem';
//import InfiniteScrollModule from "ngx-infinite-scroll";
import InfiniteScroll from 'infinite-scroll';
import NaturalGallery from '@ecodev/natural-gallery-js';

const KEY = "34461243-d0245d06d5a649c5dc9c3b27c";
const BASE_URL = "https://pixabay.com/api/"
const filter = "&image_type=photo&orientation=horizontal&safesearch=true&per_page=40";
const imageList = document.querySelector(".gallery");
const loadMoreButton = new LoadMoreButton({
    selector: '.load-more',
    hidden: true,
});

let searching = '';
let pageNumber = 1;

// axios.get('/users')
//   .then(res => {
//     console.log(res.data);
//   });

async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default class ImagesApiServices {

    async fetchImages() {
        const URL = `${BASE_URL}?key=${KEY}&q=${searching}${filter}&page=${pageNumber}`;
        const response = await fetch(URL);
        return await response.json()
        .then(takeData)
        .catch(error); 
//          try {
//     const response = await axios.get(URL);
//               console.log(response.data.hits);
//               response.data.hits = takeData;
//   } catch (error) {
//     error();
//   }
    };
 

    resetPage() {
        this.page = 1;
    };
    clearPage() { 
        imageList.innerHTML = '';
    };
    get query() {
        searching;
    };
    set query(newQuery) {
        searching = newQuery;
    };
};

const takeData = (data) => {
    console.log(data.hits);
    pageNumber += 1;
    createImageInfo(data.hits);
    loadMoreButton.enable();
    useSimpleLightBoxLibrary();
    // return function loading(){
    // const infScroll = new InfiniteScroll( imageList, {
    //     path: URL,
    //     append: createImageInfo(data.hits),
    //     responseBody: 'json',
    // });
    // };
    if (data.hits.length === 0) {
        Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again.`);
        loadMoreButton.hide();
    } else {
        Notiflix.Notify.success(`Hooray! We found ${data.total} images`);
    };
};

const error = () => {
   Notiflix.Notify.info(`We're sorry, but you've reached the end of search results.`);
};






// var statusBar = document.querySelector('.status-bar');

// infScroll.on( 'load', function() {
//   statusBar.textContent = infScroll.loadCount + ' pages loaded';
// });

// function infinityScroll() {
// $('.gallery').InfiniteScroll('.gallery', {
//     path: URL,
//     append: '.photo-card',
// });
//  };

// imageList.addEventListener("scroll", (event) => {
//     const lol = document.querySelector('.photo-card');
//     imageList.appendChild(lol);
// });




// const imageApiServices = new ImagesApiServices();


// let infScroll = new InfiniteScroll( imageList, {
//   path: imageApiServices.fetchImages(),
//   append: '.photo-card',
// });














