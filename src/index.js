import ImagesApiServices from './api-services';
import LoadMoreButton from './load-more';
import Notiflix from 'notiflix';

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
    imageApiServices.query = event.currentTarget.elements.searchQuery.value.trim();
    console.log(event.currentTarget.elements.searchQuery.value);
    
    if (event.currentTarget.elements.searchQuery.value.length < 2) {
        Notiflix.Notify.warning('Please enter at least two characters');
    } else {
        imageApiServices.fetchImages();
    //    loadMoreButton.hide();
    };


    imageApiServices.resetPage();
    imageApiServices.clearPage();
    loadMoreButton.show();
    loadMoreButton.disable();
};

export function onLoadMore() { 
    imageApiServices.fetchImages();
};









