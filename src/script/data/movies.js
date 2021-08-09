import axios from "axios";

class Movies {
	static movies() {
		return axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=d3a49676cc5ce2b46b572dc5ff7cbc8c&language=en-US`
			)
			.then((res) => {
				return Promise.resolve(res.data.results);
			})
			.catch((err) => {
				return Promise.reject(err);
			});
	}
	static moviesComing() {
		return axios
			.get(
				`https://api.themoviedb.org/3/movie/upcoming?api_key=d3a49676cc5ce2b46b572dc5ff7cbc8c&language=en-US`
			)
			.then((res) => {
				return Promise.resolve(res.data.results);
			})
			.catch((err) => {
				return Promise.reject(err);
			});
	}
}

export default Movies;
