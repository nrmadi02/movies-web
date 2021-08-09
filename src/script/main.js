import Movies from "./data/movies.js";
import "./component/movie-list.js";
import listComingCarousel from "./data/listComingCarousel.js";
import SearchMovie from "./data/searchMovie.js";
import "./component/movieSearch-list.js";

const main = async () => {
	const movieListElement = document.querySelector("movie-list");
	const movieSearchListElement = document.querySelector("movie-search-list");
	const searchElement = document.querySelector("input");
	const btnSearch = document.getElementById("btnSearch");
	const modal = document.getElementById("modelMe");
	const btnCloseModal = document.getElementById("btnClose");

	const setMoviesList = (result) => {
		movieListElement.movies = result;
	};
	try {
		const movies = await Movies.movies();
		const moviesComing = await Movies.moviesComing();
		setMoviesList(movies);
		listComingCarousel(moviesComing);
	} catch (err) {
		alert(err);
	}

	const searchHandleClick = async () => {
		try {
			const result = await SearchMovie.searchMovie(searchElement.value);
			successSearch(result);
		} catch (message) {
			errorResult(message);
		}
	};

	const successSearch = (result) => {
		movieSearchListElement.movies = result;
	};

	const errorResult = (message) => {
		movieSearchListElement.renderError(message);
	};

	btnSearch.onclick = searchHandleClick;
	btnCloseModal.addEventListener("click", () => {
		modal.style.display = "none";
	});
	window.onclick = (event) => {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
};

export default main;
