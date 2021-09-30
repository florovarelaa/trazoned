const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const Game = require('./game')

const boardSize = 11
const numberOfSteps = 2
const initialUnitsHealth = 10

let game = new Game(boardSize, numberOfSteps, initialUnitsHealth)

const ioService = require('./io.service')

app.get('/', (req, res) => {
  let clientDirName = __dirname.substring(0, __dirname.lastIndexOf(`\\`)) + '\\public\\index.html';
  res.sendFile(clientDirName);
});

app.post('/', (req, res) => {
  io.emit('post request', game)
  game.addPlayerToRoom();
  res.send({game: game})
});

io.on('connection', (socket) => {
  ioService.onConnection(io, socket, game)
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

module.exports = io;