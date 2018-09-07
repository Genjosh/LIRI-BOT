require("dotenv").config();
var info = require("./keys.js")

var spotify = new Spotify(info.spotify);

console.log(spotify);

