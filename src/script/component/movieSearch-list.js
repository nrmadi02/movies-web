import "./movie-item.js";

class MovieSearchList extends HTMLElement {
	set movies(movies) {
		this._movies = movies;
		this.render();
	}

	renderError(message) {
		this.innerHTML = "";
		this.innerHTML += `<h2 class="errorMessage">${message}</h2>`;
	}

	render() {
		this.innerHTML = "";
		this._movies.forEach((item) => {
			const movieItemElement = document.createElement("movie-item");
			movieItemElement.movie = item;
			this.appendChild(movieItemElement);
		});
	}
}

customElements.define("movie-search-list", MovieSearchList);
