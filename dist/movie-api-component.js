const OMDB_API_KEY = 'e8e4c8a';
const OMDB_API_URL = 'http://www.omdbapi.com/?apikey=';

const template = document.createElement('template');
template.innerHTML = `
      <style>
        .title {
            color: #ffffff;
        }
        
        .submitBtn {
            margin-top: 10px;
        }
      </style>  
      <div>
          <label for="movietitle" class="title">Enter Movie Title: </label>
          <input 
              type="text" 
              id="movietitle"
              name="movie" 
              placeholder="e.g. Back To The Future" 
              size="30"
              minlength="1"
              required
              >
      </div>
      <div>
        <button class="submitBtn">Call Movie API</button>
      </div>
`;

class MovieAPIComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', () => this.handleCallout());
  }

  handleCallout() {
    let value = this.shadowRoot.getElementById('movietitle').value;
    const request = new Request(`${OMDB_API_URL}${OMDB_API_KEY}&t=${value}`, { method: 'GET' });
    fetch(request)
      .then(response => {
        return response.json()
      })
      .then(json => {
        if(json.Error && json.Error.length > 0) {
          this.dispatchEvent(new CustomEvent('error', { detail: json}));
        } else {
          this.dispatchEvent(new CustomEvent('setMovie', { detail: json}));
        }
      })
  }
}

customElements.define('movie-api-component', MovieAPIComponent);