const template = document.createElement('template');

class MovieDetailsComponent extends HTMLElement {
  get movie() {
    return this._movie;
  }

  set movie(value) {
    this._movie = value;
    this._render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  _renderRatingsList(ratings) {
    let $ratingsList = document.createElement('ul');
    $ratingsList.innerHTML = '';

    ratings.forEach((rating, idx) => {
      let $ratingItem = document.createElement('li');
      $ratingItem.innerHTML = `${rating.Source} - ${rating.Value}`;
      $ratingsList.appendChild($ratingItem);
    });
    return $ratingsList.innerHTML;
  }

  _render() {

    this.shadowRoot.innerHTML = `
      <h2>${this.movie.Title}</h2>
      <h3>Ratings</h3>
      <div id="ratings">${this._renderRatingsList(this.movie.Ratings)}</div>
    `;
  }
}

customElements.define('movie-details-component', MovieDetailsComponent);