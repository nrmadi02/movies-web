const listComingCarousel = async (movie) => {
	const dataSatu = movie.slice(0, 3);
	const dataDua = movie.slice(4, 7);
	const dataTiga = movie.slice(8, 11);
	const carouselSatu = document.getElementById("carousel1");
	const carouselDua = document.getElementById("carousel2");
	const carouselTiga = document.getElementById("carousel3");
	dataSatu.forEach((item) => {
		const itemElement = document.createElement("div");
		itemElement.classList.add("col-md-4");
		itemElement.classList.add("mb-3");
		const movieItem = `
                <div class="card">
                    <img class="img-fluid" alt="100%x280" src="https://image.tmdb.org/t/p/original/${item.poster_path}">
                    <div class="card-body">
                            <h4 class="card-title">${item.title}</h4>
                            <p class="card-text"><strong>Release : </strong>${item.release_date}</p>
                        <p class="card-text"><strong>Rating : </strong>${item.vote_average}</p>
                    </div>
                </div>`;
		itemElement.innerHTML = movieItem;
		carouselSatu.appendChild(itemElement);
	});
	dataDua.forEach((item) => {
		const itemElement = document.createElement("div");
		itemElement.classList.add("col-md-4");
		itemElement.classList.add("mb-3");
		const movieItem = `
		<div class="card">
		<img class="img-fluid" alt="100%x280" src="https://image.tmdb.org/t/p/original/${item.poster_path}">
		<div class="card-body">
				<h4 class="card-title">${item.title}</h4>
				<p class="card-text"><strong>Release : </strong>${item.release_date}</p>
			<p class="card-text"><strong>Rating : </strong>${item.vote_average}</p>
		</div>
	</div>`;
		itemElement.innerHTML = movieItem;
		carouselDua.appendChild(itemElement);
	});
	dataTiga.forEach((item) => {
		const itemElement = document.createElement("div");
		itemElement.classList.add("col-md-4");
		itemElement.classList.add("mb-3");
		const movieItem = `
		<div class="card">
		<img class="img-fluid" alt="100%x280" src="https://image.tmdb.org/t/p/original/${item.poster_path}">
		<div class="card-body">
				<h4 class="card-title">${item.title}</h4>
				<p class="card-text"><strong>Release : </strong>${item.release_date}</p>
			<p class="card-text"><strong>Rating : </strong>${item.vote_average}</p>
		</div>
	</div>`;
		itemElement.innerHTML = movieItem;
		carouselTiga.appendChild(itemElement);
	});
};

export default listComingCarousel;
