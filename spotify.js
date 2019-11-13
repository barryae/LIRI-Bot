const keys = require('./keys')
const Spotify = require('node-spotify-api');
const songList = []

//This module handles the Spotify search.

function Song(response) {
    this.artist = response.artists[0].name;
    this.songName = response.name;
    this.link = response.preview_url;
    this.album = response.album.name;
}

const spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

function createSong(name) {
    spotify
        .search({ type: 'track', query: name })
        .then(response => {
            const songs = response.tracks.items
            songs.forEach(item => {
                const result = new Song(item)
                songList.push(result)
            })
            console.log(songList)
        })
}

module.exports = createSong