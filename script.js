
let getDataMovies = async () => {
    let api_key = "21b6ea03e3c7eabe9205a2d84d62368a";
    let img_URL = "https://image.tmdb.org/t/p/w500/";
    let response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key="+api_key+"&sort_by=popularity.desc&page=1"
    );
    let movies = await response.json();
    const remove = (sel) => document.querySelectorAll(sel).forEach((el) => el.remove());
        remove(".isiFilm");
    let dataMovies = movies.results;

    dataMovies.forEach((item) => {
        let containerData = document.getElementById("row");
        containerData.innerHTML += `
            <div class="col-lg-4 col-xxl-3 mb-3 isiFilm">
                <div class="card h-100">
                    <img src="` + img_URL +``+ item.poster_path +`" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3 id="card-title">${item.title}</h3>
                            <p class="card-text" id="vote_averange"></i>${item.vote_average}</p>
                            <p class="card-text" id="release_date">${item.release_date}</p>
                        </div>
                </div>
            </div>
            `;
    });
};
getDataMovies();



function setName() {
    let search = document.getElementById("input-search");
    let setSearch = search.value;

    let api_key = "21b6ea03e3c7eabe9205a2d84d62368a";
    const search_URL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${setSearch}&page=1`;
    const img_URL = "https://image.tmdb.org/t/p/w500/";
    
    
    fetch(search_URL)
        .then((response) => response.json())
        .then((movies) => {
        let containerData = document.getElementById("row");
        const remove = (sel) => document.querySelectorAll(sel).forEach((el) => el.remove());
            remove(".isiFilm");
            let dataMovies = movies.results;
        
            dataMovies.forEach((item) => {
                // let containerData = document.getElementById("row");
                containerData.innerHTML += `
                    <div class="col-lg-4 col-xxl-3 mb-3 isiFilm">
                        <div class="card h-100">
                            <img src="` + img_URL +``+ item.poster_path +`" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h3 id="card-title">${item.title}</h3>
                                    <p class="card-text" id="vote_averange"></i>${item.vote_average}</p>
                                    <p class="card-text" id="release_date">${item.release_date}</p>
                                </div>
                        </div>
                    </div>
                    `;
            });

    })
}
