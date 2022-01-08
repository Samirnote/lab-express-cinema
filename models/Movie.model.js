const { model, Schema } = require("mongoose");

const filmSchema = new Schema({
	title: String,
	director: String,
    stars: [String],
	image: String,
	description: String,
    showtimes: [String]
});

const Movie = model("movies", filmSchema);

module.exports = Movie;