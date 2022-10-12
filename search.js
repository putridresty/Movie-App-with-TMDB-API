
let buttonSearch = document.getElementById("btn-search")
buttonSearch.addEventListener("clik", cekAlert())

function cekAlert () {
  alert('ini abis dicek')
}


// // ambil data
// let dataSearch = async (inputUser) => {
//   let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${inputUser}&page=1`)
//   let movies = await response.json()
//   // console.log(movies.results)
//   let dataMovies = movies.results;

//   dataMovies.forEach((item) => {
//   console.log(item);

//   });
// }
// dataSearch('house')

