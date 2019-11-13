require("dotenv").config();
const fs = require('fs')
const inquire = require('inquirer')
const concert = require('./concert')
const spotify = require('./spotify')
const movie = require('./movie')
const keys = require("./keys.js");

prompt()
function prompt() {
    inquire
        .prompt([
            {
                type: 'list',
                message: "What would you like to search for?",
                choices: ["Concerts", "Songs", "Movies", "Do what you would like LIRI"],
                name: 'choice'
            }
        ]).then(answer => {
            if (answer.choice === "Concerts") {
                inquire
                    .prompt([
                        {
                            type: 'input',
                            message: "Which artist's concerts would you like to look for?",
                            name: 'artist',
                        }
                    ]).then(answer => {
                        // console.log(answer.artist)
                        const name = answer.artist;
                        const URLname = name.split(' ').join('-').toLowerCase();
                        concert(URLname)
                    })
            }

            if (answer.choice === "Songs") {
                inquire
                    .prompt([
                        {
                            type: 'input',
                            message: "Which song would you like to look for?",
                            name: 'song',
                        }
                    ]).then(answer => {
                        const name = answer.song;
                        spotify(name)
                    })
            }

            if (answer.choice === "Movies") {
                inquire
                    .prompt([
                        {
                            type: 'input',
                            message: "Which movie would you like to search for?",
                            name: 'movie',
                        }
                    ]).then(answer => {
                        const name = answer.movie;
                        const URLname = name.split(' ').join('+');
                        movie(URLnamecd)
                    })
            }

            if (answer.choice === "Do what you would like LIRI") {

            }

        })
}