class MovieItem extends HTMLElement {
	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="movies-box">
                <div class="movies-img">
                    <div class="quality">HD</div>
                    <img
                        src="https://image.tmdb.org/t/p/original/${
													this._movie.poster_path ? this._movie.poster_path : ""
												}">
                </div>
                <a href="#" class="genreText">
                    ${this._movie.title}
                </a>
                <p class="px-2 genreText"><strong>Release : </strong>${
									this._movie.release_date
								}</p>
                <p class="px-2 genreText"><strong>Rating : </strong>${
									this._movie.vote_average
								}</p>
            </div>
        `;
	}
}

customElements.define("movie-item", MovieItem);
