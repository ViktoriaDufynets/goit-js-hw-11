import Notiflix from 'notiflix';
import axios from "axios";
import LoadMoreButton from './load-more';
import { createImageInfo } from "./create_html_elem";
import { useSimpleLightBoxLibrary } from './create_html_elem';
import { onLoadMore } from './index';
//import InfiniteScrollModule from "ngx-infinite-scroll";
import InfiniteScroll from 'infinite-scroll';
import NaturalGallery from '@ecodev/natural-gallery-js';

const KEY = "34461243-d0245d06d5a649c5dc9c3b27c";
const BASE_URL = "https://pixabay.com/api/"
const filter = "&image_type=photo&orientation=horizontal&safesearch=true&per_page=200";
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

export default class ImagesApiServices {
    async fetchImages() {
        const URL = `${BASE_URL}?key=${KEY}&q=${searching}${filter}&page=${pageNumber}`;
        try {
            const response = await axios.get(URL);
            createImageInfo(response.data.hits);
            takeData();
            takeInfoMessages(response);
        }
        catch (error) {
        console.log(error);
        }
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

//const imageApiServices = new ImagesApiServices();
const error = () => {
   Notiflix.Notify.info(`We're sorry, but you've reached the end of search results.`);
};    

const takeData = () => {
    pageNumber += 1;
    loadMoreButton.enable();
    useSimpleLightBoxLibrary();
};

export const takeInfoMessages = (response) => {
    if (response.data.hits.length === 0) {
        Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again.`);
        loadMoreButton.hide();
    } else {
        Notiflix.Notify.success(`Hooray! We found ${response.data.total} images`);
    };
    // if (response.data.hits.length === 0) {
    //     Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again.`);
    //     loadMoreButton.hide();
    // } else if (response.data.hits.length > 0 &&  response.data.hits.length < 40) {
    //     Notiflix.Notify.info('We\'re sorry, but you\'ve reached the end of search results.');
    //     loadMoreButton.hide();
    // };
    //     Notiflix.Notify.success(`Hooray! We found ${response.data.total} images`);
    // if (onLoadMore) {
    //     Notiflix.Notify = null;
    // };
 };   



// const body = document.body;
// body.addEventListener('scroll', loading)

    // function loading(){
    // return infScroll = new InfiniteScroll( createImageInfo, {
    //     path: imageApiServices.fetchImages,
    //     // append: createImageInfo(letmeknow),
    //     // responseBody: 'json',
    // });
    // };


// const error = () => {
   
// };






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














