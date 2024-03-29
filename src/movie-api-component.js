const template = document.createElement('template');
template.innerHTML = `<button>Call Movie API</button>`;
const OMDB_API_KEY = 'e8e4c8a';
const OMDB_API_URL = 'http://www.omdbapi.com/?apikey=';
const request = new Request(`${OMDB_API_URL}${OMDB_API_KEY}&i=tt3896198`, { method: 'GET' });

class MovieAPIComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('button')
      .addEventListener('click', () => this.handleCallout());

  }

  handleCallout() {
    fetch(request)
      .then(response => {
        console.log("RESPONSE BODY: ", response.body)
      })
      .then(json => console.log("RESPONSE: ", json))
    // this.dispatchEvent(new CustomEvent('customClick', { detail: 'Hello World!' }));
  }
}

customElements.define('movie-api-component', MovieAPIComponent);