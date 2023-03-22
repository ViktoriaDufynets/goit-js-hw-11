import ImagesApiServices from './api-services';
import LoadMoreButton from './load-more';
import InfiniteScroll from 'infinite-scroll';

// const axios = require('axios/dist/browser/axios.cjs'); // browser
// const axios = require('axios/dist/node/axios.cjs'); // node

const imageApiServices = new ImagesApiServices();
const loadMoreButton = new LoadMoreButton({
    selector: '.load-more',
    hidden: true,
});
console.log(loadMoreButton);
const imageList = document.querySelector(".gallery");
const imageInfo = document.querySelector(".photo-card");

const refs = {
    input: document.querySelector('[name="searchQuery"]'),
    form: document.querySelector('#search-form'),
//    loadMoreButton: document.querySelector('.load-more'),
};
refs.form.addEventListener('submit', onSearch);
loadMoreButton.refs.button.addEventListener('click', onLoadMore);

function onSearch(event) {
    event.preventDefault();
    imageApiServices.query = event.currentTarget.elements.searchQuery.value;
    imageApiServices.fetchImages();
    imageApiServices.resetPage();
    imageApiServices.clearPage();
    loadMoreButton.show();
    loadMoreButton.disable();
};

function onLoadMore() { 
    imageApiServices.fetchImages();
};









