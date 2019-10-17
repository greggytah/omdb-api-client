import './movie-api-component.js';
import './movie-details-component.js';

const component = document.querySelector('movie-api-component');
const movieDetailsComponent = document.querySelector('movie-details-component');
component.addEventListener('setMovie', e => movieDetailsComponent.movie = e.detail);
movieDetailsComponent.addEventListener('movieDetailsClick', e => console.log("HELLO WORLD: ", e));