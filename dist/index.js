import './movie-api-component.js';
import './movie-details-component.js';

const movieAPIComponent = document.querySelector('movie-api-component');
const movieDetailsComponent = document.querySelector('movie-details-component');
movieAPIComponent.addEventListener('setMovie', e => movieDetailsComponent.movie = e.detail);
movieAPIComponent.addEventListener('error', e => movieDetailsComponent.error = e.detail);
movieDetailsComponent.addEventListener('movieDetailsClick', e => console.log("HELLO WORLD: ", e));