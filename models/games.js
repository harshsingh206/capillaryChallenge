var mongoose = require("mongoose");

// game Schema

var gameSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	platform:{
		type: String,
		required: true
	},
    score:{
		type: Number,
	    required: true
	},
	genre:{
		type: String,
		required: true
	},
	editors_choice:{
		type: String,
		required: true
	},
});

var game = module.exports = mongoose.model('Game', gameSchema);

// GET Gmaes

// GET Books
module.exports.getGames = function(callback, limit){
	Game.find(callback).limit(limit);
}

// GET Books by Id
module.exports.getBooksById = function(id, callback){
	Game.findById(id, callback);
}


// GET Games by Id
module.exports.getGamesById = function(id, callback){
	Game.findById(id, callback);
}

// POST Games
module.exports.addGames = function(game, callback){
	Game.create(game, callback);
}

// UPDATE Gmaes
module.exports.updateGames = function(id, game, options, callback){
	var query = {_id: id};
	var update = {
		title : game.title,
		platform : game.platform,
		score : game.score,
		genre : game.genre,
		editors_choice : game.editors_choice,	
	}
	Games.findOneAndUpdate(query, update, options, callback);
}


// DELETE Games
module.exports.removeGames = function(id, callback){
	var query = {_id: id};
	Game.remove(query, callback);
}


