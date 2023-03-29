import ImagesApiServices from './api-services';
import LoadMoreButton from './load-more';
import Notiflix from 'notiflix';
import { createImageInfo } from './create_html_elem';


const imageApiServices = new ImagesApiServices();
const loadMoreButton = new LoadMoreButton({
    selector: '.load-more',
    hidden: true,
});

const refs = {
    input: document.querySelector('[name="searchQuery"]'),
    form: document.querySelector('#search-form'),
};

refs.form.addEventListener('submit', onSearch);
loadMoreButton.refs.button.addEventListener('click', onLoadMore);

function onSearch(event) {
    event.preventDefault();
    imageApiServices.query = event.currentTarget.elements.searchQuery.value.trim();
    console.log(event.currentTarget.elements.searchQuery.value);
    
    if (event.currentTarget.elements.searchQuery.value.length < 2) {
        Notiflix.Notify.warning('Please enter at least two characters');
        loadMoreButton.hide();
    } else {
       imageApiServices.fetchImages("search");
       imageApiServices.resetPage();
       imageApiServices.clearPage();
       loadMoreButton.show();
       loadMoreButton.disable();

    };

};

export function onLoadMore() { 
   imageApiServices.fetchImages("loadMore");
};

// function error() {
//     if ([imageApiServices.fetchImages()].length < 40)
//     Notiflix.Notify.info(`We're sorry, but you've reached the end of search results.`);
//     };






