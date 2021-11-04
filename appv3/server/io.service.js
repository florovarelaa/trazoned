function onConnection(io, socket, game) {
        console.log("new player trying to connect with id: ", socket.id)
        if (Object.keys(game.players).length === 0) {
            game.addPlayer(socket.id)
            game.initPlayersUnitsSteps()
            socket.broadcast.to(socket.id).emit('build-ui', game);
            console.log('1st player connected with id: ', socket.id)
            io.emit('updateConnections', game)
        } else if (Object.keys(game.players).length === 1) {
            game.addPlayer(socket.id)
            console.log('2nd player connected with id: ', socket.id)
            game.initPlayersUnitsSteps()
            io.emit('updateConnections', game);
            io.emit('build-ui', game)
        } else {
            console.log('Too many players')
            return false;
        }

        socket.on('nextFase', (data) => {
            game.nextFase()
        })

        socket.on('set-unit-step-movement', (data) => {
            let { id_player, id_unit, selectedIndex} = data
            console.log('set-unit-step-movement ', data)
        })

        socket.on('disconnect', () => {
            game.removePlayer(socket.id)
            console.log('after disconnect: ', game)
            io.emit('updateConnections', game)
        })
}

module.exports = onConnection