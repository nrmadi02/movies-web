import "./movie-item.js";

class MovieList extends HTMLElement {
	set movies(movies) {
		this._movies = movies;
		this.render();
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

customElements.define("movie-list", MovieList);
