const template = document.createElement('template');

class MovieDetailsComponent extends HTMLElement {
  get movie() {
    return this._movie;
  }

  set movie(value) {
    this._movie = value;
    this._render();
  }

  get error() {
    return this._error;
  }

  set error(value) {
    this._error = value;
    this._renderError();
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
      $ratingItem.innerHTML = `${rating.Source}${'<br/>'}${rating.Value}`;
      $ratingsList.appendChild($ratingItem);
    });
    return $ratingsList.innerHTML;
  }

  _render() {
    this.shadowRoot.innerHTML = `
      <style>
        li {
            list-style-type: none;
            padding: 0 20px;
        }
        
        .ratingsInfo {
            text-align: center;
            color: #ffffff;
        }
        
        #ratings {
            max-width: 500px;
            display: inline-flex;
        }
        
        .marginTop {
            margin-top: 20px;
        }
      </style>  
      <div class="ratingsInfo">
        <h1>${this.movie.Title}</h1>
        <h3>Ratings</h3>
        <div id="ratings">${this._renderRatingsList(this.movie.Ratings)}</div>
        <div class="marginTop">Year: ${this.movie.Year}</div>
        <div class="marginTop">Runtime: ${this.movie.Runtime}</div>
        <img class="marginTop" src=${this.movie.Poster} />
      </div>
    `;
  }

  _renderError() {
    this.shadowRoot.innerHTML = `
      <style>
        .errorText {
            color: #ffffff;
            text-align: center;
        }
      </style>  
      <h2 class="errorText">${this.error.Error}</h2>
    `
  }
}

customElements.define('movie-details-component', MovieDetailsComponent);