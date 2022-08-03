import express from 'express';
const app = express();
import * as http from 'http'
const server = http.createServer(app);

import { SimulatedPlayers } from './Instances/players/simulatedPlayers';
import { Game } from './Game';

const simulatedPlayers = new SimulatedPlayers().players

const game = new Game(simulatedPlayers);

server.listen(3000, () => {
    game.init();
    console.log('listening on *:3000');
    setTimeout( () => game.gameSimulation(), 1000)
});