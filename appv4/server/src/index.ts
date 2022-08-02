import express from 'express';
const app = express();
import * as http from 'http'
const server = http.createServer(app);

import { simulatedPlayers } from './Instances/players/simulatedPlayers';
import { Game } from './Game';

const game = new Game(new simulatedPlayers().players);

server.listen(3000, () => {
    game.init();
    console.log('listening on *:3000');
    setTimeout( () => game.gameSimulation(), 1000)
});