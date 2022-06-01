const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const simulatedPlayers = require('./game/Instances/players/simulatedPlayers')
const Game = require('./game/Game')

const game = new Game(simulatedPlayers.players);

server.listen(3000, () => {
    game.init();
    console.log('listening on *:3000');
});