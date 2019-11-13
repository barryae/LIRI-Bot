const axios = require('axios')
const keys = require('./keys')
const moment = require('moment')
const concertsList = []

//This is the module that handles the Concerts search.

function Concert(response) {
    this.venue = response.venue.name;
    this.venueLocation = response.venue.display_location;
    this.date = moment(response.datetime_local).format('MMMM Do YYYY, h:mm')
}

function Keys(id, secret) {
    this.id = id;
    this.secret = secret
}

const seatgeekKeys = new Keys(keys.seatgeek.id, keys.seatgeek.secret)

function createConcert(name) {
    const URL = `https://api.seatgeek.com/2/events?client_id=${seatgeekKeys.id}&client_secret=${seatgeekKeys.secret}&performers.slug=${name}`

    axios.get(URL)
        .then(response => {
            const concerts = response.data.events
            concerts.forEach(event => {
                const concert = new Concert(event)
                concertsList.push(concert)
            })
            console.log(concertsList)
        })
}

module.exports = createConcert