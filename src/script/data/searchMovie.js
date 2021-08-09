import axios from "axios";

class SearchMovie {
	static searchMovie(keyword) {
		const modal = document.getElementById("modelMe");
		if (keyword.length !== 0) {
			modal.style.display = "block";
		} else {
			modal.style.display = "none";
		}
		if (keyword.length !== 0) {
			return axios
				.get(
					`https://api.themoviedb.org/3/search/movie?api_key=d3a49676cc5ce2b46b572dc5ff7cbc8c&language=en-US&query=${keyword}`
				)
				.then((res) => {
					if (res.data.results.length !== 0) {
						return Promise.resolve(res.data.results);
					} else {
						return Promise.reject(`${keyword} Tidak Ditemukan`);
					}
				});
		} else {
			alert("Pencarian Tidak Boleh Kosong");
		}
	}
}

export default SearchMovie;
