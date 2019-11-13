const axios = require('axios')
const movieList = []

function Movie(response) {
    this.title = response.Title;
    this.year = response.Year;
    this.imdbRating = response.imdbRating;
    this.rottenRating = response.Ratings[1].Value;
    this.country = response.Country;
    this.language = response.Language;
    this.plot = response.Plot;
    this.actors = response.Actors;
}

function createMovie(name) {
    //console.log(name)
    const URL = `http://www.omdbapi.com/?apikey=trilogy&t=${name}`
    //console.log(URL)
    axios.get(URL)
        .then(response => {
            const movies = response.data
            const movie = new Movie(movies)
            movieList.push(movie)
            console.log(movieList)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = createMovie