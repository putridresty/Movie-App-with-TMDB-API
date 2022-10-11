let api_key = "21b6ea03e3c7eabe9205a2d84d62368a";
let containerData = document.getElementById("row");

let getDataMovies = async () => {
  // get, post, edit, delete
  let response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=1`
  );
  let movies = await response.json();
  let dataMovies = movies.results;

  dataMovies.forEach((item) => {
    console.log(item);

    containerData.innerHTML += `
            <div class="col-lg-4 col-xxl-3 mb-3">
                <div class="card">
                    <img class="card-img-top" src="./img/img.png" alt="no-image" id="movie-img">
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

// search

// let dataSearch = async (inputUser) => {
//     // get, post, edit, delete
//     let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${inputUser}&page=1`)
//     let movies = await response.json()
//     console.log(movies.results)
// }
// dataSearch('house')
