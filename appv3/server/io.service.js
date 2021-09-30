class ioService {
    constructor() {
    }
    onConnection(io, socket, game) {
        const players = game.players

        console.log("new player trying to connect with id: ", socket.id)

        if (Object.keys(players).length === 0) {
            game.addPlayer(socket.id)
            console.log('player 1 connected with id: ', socket.id)
            io.emit('updateConnections', players)

        } else if (Object.keys(players).length === 1) {
            game.addPlayer(socket.id)
            console.log('player 2 connected with id: ', socket.id)
            console.log('game: ', game)
            io.emit('updateConnections', players)

        } else {
            console.log('Too many players')
            return false;

        }

        socket.on('nextFase', () => {
            game.nextFase()
        })

        socket.on('disconnect', () => {
            delete players[socket.id]
            console.log("players: ", Object.keys(players).length)
            io.emit('updateConnections', players)
        })
    }
}

module.exports = new ioService()