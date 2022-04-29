const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const Game = require('./game/Game')

const game = new Game();

server.listen(3000, () => {
    game.init();
    console.log('listening on *:3000');
});