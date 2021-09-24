const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  let clientDirName = __dirname.substring(0, __dirname.lastIndexOf(`\\`)) + '\\public\\index.html';
  res.sendFile(clientDirName);
});

app.post('/', (req, res) => {
  io.emit('post request', {varela: 'varela'})
  res.send({floro: 'floro'})
});

io.on('connection', (socket) => {
  console.log('a user connected ', socket.id)
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});