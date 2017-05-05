var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var app = express();

app.use(bodyParser.json());
Game = require('./models/games');
//connect to db
mongoose.connect("mongodb://localhost/capillarydb");
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send("Please api/games");
});


// GET Games
app.get('/api/games',function(req,res){
	Game.getGames(function(err, games){
		if(err){
			throw err;
		}
		res.json(games);
	});
});


// GET Games by ID
app.get('/api/games/:_id',function(req,res){
	Gameslist.getGamesById(req.params._id, function(err, game){
		if(err){
			throw err;
		}
		res.json(game);
	});
});

// POST Games
app.post('/api/games',function(req,res){
	var game = req.body;
	Gameslist.addGames(game, function(err, game){
		if(err){
			throw err;
		}
		res.json(game);
	});
});

// PUT Games
app.put('/api/games/:_id',function(req,res){
	var id = req.params._id;
	var game = req.body;
	Gameslist.updateGames(id, game, {}, function(err, game){
		if(err){
			throw err;
		}
		res.json(game);
	});
});

// DELETE Games
app.delete('/api/games/:_id',function(req,res){
	var id = req.params._id;
	Gameslist.removeGames(id, function(err, game){
		if(err){
			throw err;
		}
		res.json(game);
	});
});

app.listen(3000);
console.log("Running on port 3000");



