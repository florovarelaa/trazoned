// players units movements initialization - start

let playersColors = ['#CC3333','#3399FF']

let availablePositionsMovementColor = 'cd94d3'
let availablePositionsAbilitiesColor = 'c06582'
let availablePositionsAbilitiesAffectedPositionsColor = 'e7a7bb'

let initialUnitsHealth = 10;

let movementKnight =
    [
        [0,1,0,1,0],
        [1,0,0,0,1],
        [0,0,0,0,0],
        [1,0,0,0,1],
        [0,1,0,1,0]
     ]

let movementInvertedKnight = 
    [
        [1,0,1,0,1],
        [0,0,0,0,0],
        [1,0,0,0,1],
        [0,0,0,0,0],
        [1,0,1,0,1]
    ]

let movementKing = [
    [1,1,1],
    [1,0,1],
    [1,1,1],
]

let abilitiesShapes = {
    0: {
        selectPosition: 
            [
                [1,1,1],
                [1,0,1],
                [1,1,1],
        ],
        affectedPositions: {
            '00': [[0, 0],[1,0],[0,1],[-1,-1]],
            '01': [[0, 0],[-1,0],[1,0],[0,-1]],
            '02': [[0, 0],[-1,0],[0,1],[1,-1]],
            '10': [[0, 0],[0,-1],[0,1],[-1,0]],
            '12': [[0, 0],[0,-1],[0,1],[1,0]],
            '20': [[0, 0],[0,-1],[1,0],[-1,1]],
            '21': [[0, 0],[-1,0],[1,0],[0,1]],
            '22': [[0, 0],[-1,0],[0,-1],[1,1]],
        }
    },
    // 0: {
    //     selectPosition: 
    //         [
    //             [1,1,1],
    //             [1,0,1],
    //             [1,1,1],
    //     ],
    //     affectedPositions: {
    //         '00': [[-1, -1],[0,0],[0,1],[1,0]],
    //         '01': [[-1, 1],[0,0],[0,1],[0,2]],
    //         '02': [[-1, 3],[0,1],[0,2],[1,2]],
    //         '10': [[0, 0],[1,-1],[1,0],[2,0]],
    //         '12': [[0, 2],[1,2],[1,3],[2,2]],
    //         '20': [[1, 0],[2,0],[2,1],[3,-1]],
    //         '21': [[2, 0],[2,1],[2,1],[3,1]],
    //         '22': [[1, 2],[2,1],[2,2],[3,3]],
    //     }
    // },
    1: {
        selectPosition: 
            [
                [1,1,1],
                [1,0,1],
                [1,1,1],
        ],
        affectedPositions: {
            '00': [[0,0],[-1,-1],[-2,-2],[-3,-3],],
            '01': [[0,0],[0,-1],[0,-2],[0,-3]],
            '02': [[0,0],[1,-1],[2,-2],[3,-3]],
            '10': [[0,0],[-1,0],[-2,0],[-3,0]],
            '12': [[0,0],[1,0],[2,0],[3,0]],
            '20': [[0,0],[-1,1],[-2,2],[-3,3]],
            '21': [[0,0],[0,1],[0,2],[0,3]],
            '22': [[0,0],[1,1],[2,2],[3,3]],
        }
    },
    2: {
        selectPosition: movementKing,
        affectedPositions: movementAsAffectedPositions(movementKing) 
    },
    3: {
        selectPosition: movementKnight,
        affectedPositions: movementAsAffectedPositions(movementKnight) 
    }   
}

let abilitiesDamage = 3

let abilities = {
    warriorFirst : {
        id: 0,
        name: 'warrior first',
        shape: abilitiesShapes[0],
        damage: abilitiesDamage,
        moves: false
    },
    warriorSecond : {
        id: 1,
        name: 'warrior second',
        shape:  abilitiesShapes[3],
        damage: abilitiesDamage, 
        moves: true
    },
    mageFirst: {
        id: 2,
        name: 'mage first',
        shape:  abilitiesShapes[1],
        damage: abilitiesDamage,
        moves: false
    }, 
    mageSecond: {
        id: 3,
        name: 'mage second',
        shape:  abilitiesShapes[2],
        damage: abilitiesDamage,
        moves: true
    }
}

let warrior = {
    name: 'warrior',
    abilities: [abilities.warriorFirst, abilities.warriorSecond],
    position: { 'x': -1, 'y': -1},
    futurePosition: { 'x': -1, 'y': -1},
    futureAbilities: [],
    currentHealth: initialUnitsHealth,
    playerId: null 
}

let mage = {
    name: 'mage',
    abilities: [abilities.mageFirst, abilities.mageSecond],
    position: { 'x': -1, 'y': -1},
    futurePosition: { 'x': -1, 'y': -1},
    futureAbilities: [],
    currentHealth: initialUnitsHealth,
    playerId: null
}

let movement_Knight  = ['knight movement']
let movement_Inverted_Knight  = ['knightInverted movement']


// players units movements initialization - end

// game initialization - start

let boardSize = 11
let cellSize = 75

let unitsPlayer1 = [warrior]
let unitsPlayer2 = [mage]

let movementsPlayer1 = [movementKnight]
let movementsPlayer2 = [movementInvertedKnight]

let player1 = {
    id: 0,
    movements: movementsPlayer1,
    units: unitsPlayer1,
    color: playersColors[0],
    initialPosition: { x: -1, y: -1},
}

let player2 = {
    id: 1,
    movements: movementsPlayer2,
    units: unitsPlayer2,
    color: playersColors[1],
    initialPosition: { x: -1, y: -1},
}

let players = [player1, player2]

let boardState = {}
let futureBoardState = {}

function startGame(boardSize, cellSize, players) {

    createBoard(boardSize, cellSize);
    setPlayersInitialPositions(players, boardSize)
    setPlayerIdToUnits(players);
    setPlayersUnitsInitialPosition(players)
    setInitialBoardState(boardState, players)
    drawBoardState(boardState, players)
    createPlayersUi(players)
    setNextFaseButton(players);
}

startGame(boardSize, cellSize, players)

// game initialization - end

//board - start

function createBoard(boardSize, cellSize) {
    let board = document.getElementById('board');
    let cell;
    let rowContainer;

    for (let i = 0; i < boardSize; i++) {

        rowContainer = document.createElement("div")
        rowContainer.classList.add('board-row')
        rowContainer.style.width = `${boardSize*cellSize}px`

        for (let j = 0; j < boardSize; j++) {
            cell = document.createElement("div");
            
            cell.style.width = `${cellSize}px`
            cell.style.height = `${cellSize}px`
            
            cell.classList.add('board-cell');
            cell.id = `x${j}y${i}`
            
            colorBoardCell(cell, i, j);

            rowContainer.appendChild(cell);

        }

        board.appendChild(rowContainer);
    }
}

function colorBoardCell(cell, i,j) {
    if ( (i+j) % 2 === 0) {
        cell.classList.add('even')
    } else {
        cell.classList.add('odd')
    }
}

function addEventOnClickToCells() {
    let cells = document.querySelectorAll('.board-cell')
    cells.forEach( cell => {
        cell.addEventListener('click', () => 'trazoned')
    })
}

function addEventOnClickToUnitCell(cellId) {
    let cell = document.getElementById(cellId)
    cell.addEventListener('click', () => 'trazoned')
}

function addEventOnHoverToCells() {
    let cells = document.querySelectorAll('.board-cell')
    cells.forEach( cell => {
        cell.addEventListener('mouseover', () => 'trazoned')
    })
}

// addEventOnClickToCells();
// addEventOnHoverToCellsWith();

//board-end



// players and units ui - start

function drawUnitOnMap(unit, color, cellSize) {
    let unitImage = document.createElement('div')
    unitImage.innerHTML = unit.name;
    let unitImageDimensions = cellSize - 0.15 * cellSize
    unitImage.style.width = `${unitImageDimensions}px`
    unitImage.style.height = `${unitImageDimensions}px`
    unitImage.style.backgroundColor = color;
    unitImage.classList.add('board-unit-img')
    //Aca es el arreglo
    //let cellId = (position.x != undefined && position.y !=undefined ) ? `${position.x}${position.y}` : position
    let cellId = getPositionAsIdFromXY(unit.position)
    document.getElementById(cellId).appendChild(unitImage)
}

function setPlayersUnitsInitialPosition(players) {
    for (let playersIndex = 0; playersIndex < players.length; playersIndex++) {
        let player = players[playersIndex]
        for (let unitsIndex = 0; unitsIndex < player.units.length; unitsIndex++) {
            let unit = player.units[unitsIndex]
            unit.position = setUnitInitialPosition(player.initialPosition, unitsIndex)
        }
    }
}

function setUnitInitialPosition(position, offset) {
    let pos = {
        x: position.x + offset,
        y: position.y
    }
    return pos
}



function setPlayerInitialPosition(player, index, boardSize) {
    let initialPosition;
    switch(index) {
        case 0: {
            initialPosition = {x: Math.floor(boardSize/2), y: 0 }
            break;
        }
        case 1: {
            initialPosition = {x: Math.floor(boardSize/2), y: boardSize-1}
            break;
        }
        case 2: {
            initialPosition = {x: 0, y: Math.floor(boardSize/2)}
            break;
        }
        case 3: {
            initialPosition = {x: boardSize-1, y: Math.floor(boardSize/2)}
            break;
        }
        
    }

    player.initialPosition = initialPosition
}

function setPlayersInitialPositions(players, boardSize) {
    players.forEach( (player, index) => setPlayerInitialPosition(player, index, boardSize))
}

function setPlayerIdToUnits(players) {
    players.forEach((player) => {
        player.units.forEach((unit, uIndex) => {
            unit.playerId = player.id
        })
    })
}

function drawBoardState(boardState, players) {
    //this is a bug, it has to be set somewhere outside.
    let boardStateKeys = Object.keys(boardState)
    boardState = Object.values(boardState)

    boardState.forEach( (unit, index) => {
        let futurePosition = getPositionAsXYFromId(boardStateKeys[index])
        setUnitFuturePosition(unit, futurePosition)
        let player = players.filter( player => player.id === unit.playerId)[0]
        drawUnitOnMap(unit, player.color, cellSize)
    })
}

function createUiTag(tagName, id, parentNode, classes, innerHTML) {
    let tag = document.createElement(tagName);
    
    if(id != '') {
        tag.setAttribute("id", id);
    }

    innerHTML == false ? '' : tag.innerHTML = innerHTML

    classes = classes.split(' ')

    if( !(classes.length === 1 && classes[0] === "")) {
        classes.map( c => tag.classList.add(c))
    }

    parentNode.appendChild(tag)
}

function getUiButtons() {
    let uiButtons = document.querySelectorAll('.unit-button')
    return uiButtons
}

function setUiDisabled() {
    let buttons = getUiButtons();
    buttons.forEach( button => {
        button.disabled = true
    })
}

function setUiEnabled() {
    let buttons = getUiButtons();
    buttons.forEach( button => {
        button.disabled = false
    })
}

function createPlayersUi(players) {

    let uiPlayersContainer = document.getElementById('ui-players-container')

    players.forEach( (player, playerIndex) => {
        let idPlayer = `ui-player-${playerIndex}`
        createUiTag('div', idPlayer, uiPlayersContainer, `ui-player player-${playerIndex}`, ``)

        let uiPlayer = document.getElementById(idPlayer)

        player.units.forEach( (unit, unitIndex) => {
            let idUnit = `${idPlayer}-unit-${unitIndex}`
            createUiTag('div', idUnit , uiPlayer, `ui-unit unit-${unitIndex}`, ``)
            let uiUnit = document.getElementById(idUnit);
            createUiTag('div', `${idUnit}-name`, uiUnit, 'unit-name', unit.name)
            createUiTag('div', `${idUnit}-health`, uiUnit, 'unit-health', `${unit.currentHealth}/${initialUnitsHealth} ❤`)
            createUiTag('button', `${idUnit}-move`, uiUnit, 'unit-button unit-button-movement', 'Move')
            
            unit.abilities.forEach( (ability, abilityIndex) => {
                createUiTag('button', `${idUnit}-ability-${abilityIndex}`, uiUnit, `unit-button unit-button-ability-${abilityIndex}`, ability.name)
            })
        })
    })

    addEventListenersToPlayersButtons(players);

    document.body.onkeyup = function(e){
        if (e.keyCode === 32 || e.key === ' ') {
            nextFase(players)
        }
        if (e.key === 'a' || e.key === 'd') {
            if (e.key === 'a') {
                let moveButtonId = `ui-player-0-unit-0-move`
                document.getElementById(moveButtonId).click()
            } else {
                let moveButtonId = `ui-player-1-unit-0-move`
                document.getElementById(moveButtonId).click()
            }
        }
    }
}

function addEventListenersToPlayersButtons(players) {
    players.forEach( (player, playerIndex) => {
        let playerId = `ui-player-${playerIndex}`
        let units = player.units
        units.forEach( (unit, unitIndex) => {
            
            let moveButtonId = `${playerId}-unit-${unitIndex}-move`
            let moveButton = document.getElementById(moveButtonId)

            moveButton.addEventListener('click', () => unitSetFirstFaseMovement(player.movements[0], unit))
            
            let unitAbilities = unit.abilities
            unitAbilities.forEach( (ability, abilityIndex) => {
                let abilityButtonId = `${playerId}-unit-${unitIndex}-ability-${abilityIndex}`
                let abilityButton = document.getElementById(abilityButtonId)
                abilityButton.addEventListener('click', () => unitSetFirstFaseAbility(ability, unit, abilityIndex))
            })
        })
    })
}

// players and units ui - end


// game logic - start

function unitSetFirstFaseMovement(movement, unit) {
    setUiDisabled()
    let availablePositions = getAvailablePositions(unit.futurePosition, movement, boardState, boardSize);
    addColorAvailablePositions(availablePositions, availablePositionsMovementColor)
    waitForPlayerMovementAction(availablePositions, unit)
}

function unitSetFirstFaseAbility(ability, unit, abilityIndex) {
    setUiDisabled()
    let availablePositions = getAvailablePositions(unit.futurePosition, ability.shape.selectPosition, boardState, boardSize);
    let abilityAffectedPositions = getAbilityAffectedPositions(unit.futurePosition, ability)
    addColorAvailablePositions(availablePositions, availablePositionsAbilitiesColor)
    addColorHoverAvailablePositions(abilityAffectedPositions)
    waitForPlayerAbilityAction(availablePositions, unit, ability, abilityAffectedPositions, abilityIndex)
}

function setInitialBoardState(boardState, players) {
    players.forEach( player => {
        player.units.forEach( unit => {
            let cellId = getPositionAsIdFromXY(unit.position)
            boardState[cellId] = unit
        })
    })
}

function setFutureBoardState(players) {
    players.forEach( (player, player_index) => {
        player.units.forEach( (unit, unit_index) => {
            let unitFuturePositionAsId = getPositionAsIdFromXY(unit.futurePosition)
            let theUnitInTheCell = futureBoardState[unitFuturePositionAsId]
            if (unitFuturePositionAsId in futureBoardState) {
                if(theUnitInTheCell.name === unit.name && theUnitInTheCell.playerId === unit.playerId) {
                    
                } else { // units collide. both go to their starting positions

                    let unitInitialPosition = { x: player.initialPosition.x  + unit_index, y: player.initialPosition.y}
                    setUnitFuturePosition(unit, unitInitialPosition)
                    
                    let thePlayerOfTheUnitInTheCell = players.filter( player => theUnitInTheCell.playerId === player.id)[0]


                    unitInitialPosition = { x: thePlayerOfTheUnitInTheCell.initialPosition.x + unit_index, y: thePlayerOfTheUnitInTheCell.initialPosition.y}
                    setUnitFuturePosition(theUnitInTheCell, unitInitialPosition)

                    resetUnitFutureAbilities(theUnitInTheCell)
                    resetUnitFutureAbilities(unit)

                    delete futureBoardState[unitFuturePositionAsId]
                }
            } else {
                if (unitHasFuturePosition(unit)) {
                    futureBoardState[getPositionAsIdFromXY(unit.futurePosition)] = unit
                } else {
                    let unitPositionCellID = getPositionAsIdFromXY(unit.position)
                    futureBoardState[unitPositionCellID] = unit
                }
            }
        })
    })
}

function setUnitFuturePosition(unit, position) {
    unit.futurePosition = position
}

function getUnitFuturePosition(unit) {
    return unit.futurePosition
}
function setUnitPosition(unit, position) {
    unit.position = position
}

function setUnitFutureAbilityPosition(unit, ability, position, abilityIndex) {
    unit.futureAbilities[abilityIndex] = [{id: ability.id, position: position}]
}

function getUnitAbilityFuturePosition(unit, abilityId) {
    return unit.futureAbilityPosition
}

function setPlayersUnitsPositionAsFuturePosition(players) {
    players.forEach(player => {
        player.units.forEach( unit => {
            if( unitHasFuturePosition(unit) ) {
                setUnitPosition(unit, unit.futurePosition)
            }
        })
    })
}

function getUnitPosition(unit) {
    return unit.position
}

function resetUnitFuturePosition(unit) {
    unit.futurePosition = {
        x: -1,
        y: -1
    }
}

function unitHasFuturePosition(unit) {
    return (unit.futurePosition.x != -1 && unit.futurePosition.y != -1)
}

function resetUnitsFuturePosition(players) {
    players.forEach( player => {
        player.units.forEach( unit => {
            resetUnitFuturePosition(unit)
        })
    })
}

function resetUnitsFutureAbilities(players) {
    players.forEach( player => {
        player.units.forEach( unit => {
            resetUnitFutureAbilities(unit)
        })
    })
}

function resetFutureBoardState(){
    futureBoardState = {}
}

function setUnitActualPositionAsFuturePosition(unit) {
    let futurePosition = getUnitFuturePosition(unit)

    setUnitActualPosition(unit, futurePosition)
    resetUnitFuturePosition(unit)
}

function getAvailablePositions(unitPosition, movement, boardState, boardSize) {


    let movementCenterCell = Math.floor(movement.length/2)
    let allPossiblePositions = []
    let availablePositions = []

    for (let i = 0; i <= movement.length - 1; i++) {
        const row = movement[i];
        for (let j = 0; j <= row.length - 1; j++) {
            if (movement[i][j] === 1) {

                let cell = new Object()

                cell = {
                    x: null,
                    y: null
                };

                cell.x = i - movementCenterCell
                cell.y = j - movementCenterCell
                allPossiblePositions.push(cell)
            }
        }
    }
    
    availablePositions = allPossiblePositions.map( e => {
        return {
            x: unitPosition.x + e.x,
            y: unitPosition.y + e.y
        }
    })

    availablePositions = availablePositions.filter( e => {
        return positionIsWithinBoardBounds(e, boardSize)
    })

    return availablePositions
}

function getAbilityAffectedPositions(position, ability) {

    let availablePositions = getAvailablePositions(position, ability.shape.selectPosition, boardState, boardSize)

    let unitCenterPosition = Math.floor(ability.shape.selectPosition.length/2)

    let affectedPositions = {}

    availablePositions.forEach( availablePosition => {

        let affectedPositionX = Math.abs(position.x - availablePosition.x - unitCenterPosition)
        let affectedPositionY = Math.abs(position.y - availablePosition.y - unitCenterPosition)

        let index = `${affectedPositionY}${affectedPositionX}`
        let affectedPositionIndex = `x${availablePosition.x}y${availablePosition.y}`

        affectedPositions[affectedPositionIndex] = ability.shape.affectedPositions[index].map( affectedPosition => {
            
            let affectedPositionInstanceX = affectedPosition[0] + availablePosition.x
            let affectedPositionInstanceY = affectedPosition[1] + availablePosition.y
            
            return [affectedPositionInstanceX, affectedPositionInstanceY]
        })


    })

    Object.keys( affectedPositions ).forEach( selectPosition => {

        affectedPositions[selectPosition] = affectedPositions[selectPosition].filter( affectedPosition => {
                return positionIsWithinBoardBounds(affectedPosition, boardSize)
        })
    })
    
    return affectedPositions
}

function addColorAvailablePositions(positions, color) {
    positions.forEach( position => {
        let cellHtmlElementdocument = document.getElementById(getPositionAsIdFromXY(position))
        cellHtmlElementdocument.classList.add(color)
    })
}

function removeColorAvailablePositions(positions, color) {
    positions.forEach( position => {
        let cellHtmlElementdocument = document.getElementById(getPositionAsIdFromXY(position))
        cellHtmlElementdocument.classList.remove(color)
    })
}

function addColorHoverAvailablePositions(affectedPositions) {
    Object.entries(affectedPositions).forEach( value => {
            let element = document.getElementById(value[0])

            let cells = value[1].map( cell => {
                let cellId = `x${cell[0]}y${cell[1]}`
                let cellElement = document.getElementById(cellId)
                return cellElement
            })

            element.addEventListener('mouseenter', () => {
                cells.forEach( cell => {
                    cell.classList.add(availablePositionsAbilitiesAffectedPositionsColor)
                })
            })
            element.addEventListener('mouseleave', () => {
                cells.forEach( cell => {
                    cell.classList.remove(availablePositionsAbilitiesAffectedPositionsColor)
                })
            })
    })
}

function removeColorHoverAvailablePositions(affectedPositions) {
    Object.entries(affectedPositions).forEach( value => {

        let cells = value[1].map( cell => {
            let cellId = `x${cell[0]}y${cell[1]}`
            let cellElement = document.getElementById(cellId)
            return cellElement
        })

        cells.forEach( cell => {
            cell.classList.remove(availablePositionsAbilitiesAffectedPositionsColor)
        })
})
}

function positionIsWithinBoardBounds(position, boardSize) {

    if (Array.isArray(position)) {
        if (position[0] >= boardSize || position[0] < 0 || position[1] >= boardSize || position[1] < 0) {
            return false
        } else {
            return true
        }
    } else {   
        if (position.x >= boardSize || position.x < 0 || position.y >= boardSize || position.y < 0) {
            return false
        } else {
            return true
        }
    }
}

function waitForPlayerMovementAction(availablePositions, unit) {

    let clickButton = false;
    let isAvailablePosition

    window.onclick = e => {
        e.preventDefault()
        if ( clickButton ) {
            let targetElementId = e.target.id
            let positionXYAtTarget = getPositionAsXYFromId(targetElementId)
            isAvailablePosition = availablePositions.some( position => (positionXYAtTarget.x === position.x && positionXYAtTarget.y === position.y))
            removeColorAvailablePositions(availablePositions, availablePositionsMovementColor)
            if(isAvailablePosition) {
                let futurePosition = positionXYAtTarget
                setUnitFuturePosition(unit, futurePosition)
                clearUnitMovementsAbilities(unit)
            }
            setUiEnabled()
            window.onclick = null
        }
        clickButton = true
    }
}

// game logic - end

function setNextFaseButton(players) {
    let nextFaseBtn = document.getElementById('btn-next-fase')
    nextFaseBtn.addEventListener('click', () => nextFase(players))
}

function nextFase(players){
    setFutureBoardState(players)
    executeUnitsAbilites(players)
    // boardstate could be shown here to see what happened
    clearBoardUI(boardState)
    setPlayersUnitsPositionAsFuturePosition(players);
    resetUnitsFutureAbilities(players);
    resetUnitsFuturePosition(players);
    drawBoardState(futureBoardState, players);
    resetFutureBoardState();
}

function getPositionAsIdFromXY(position) {
    return `x${position.x}y${position.y}`
}

function getPositionAsXYFromId(positionAsId){
    let x = positionAsId.substring(positionAsId.indexOf("x") + 1, positionAsId.indexOf('y'))
    let y = positionAsId.substring(positionAsId.indexOf("y") + 1, positionAsId.length)
    return {
        x: parseInt(x),
        y: parseInt(y)
    }
}

function clearBoardUI(boardState) {
    boardState = Object.values(boardState)
    boardState.forEach( unit => {
        let position = getPositionAsIdFromXY(unit.position)
        let unitInCell = document.getElementById(position);
        if (unitInCell.firstChild){
            unitInCell.removeChild(unitInCell.firstChild);
        }
    })
}

// abilities - start 

function movementAsAffectedPositions(movement) {

    // movementKnight =
    // [
    //     [0,1,0,1,0],
    //     [1,0,0,0,1],
    //     [0,0,0,0,0],
    //     [1,0,0,0,1],
    //     [0,1,0,1,0]
    //  ]

    // affectedPositions: {
    //     '00': [[0, 0]],
    //     '01': [[0, 1]],
    //     '02': [[0, 2]],
    //     '10': [[1, 0]],
    //     '11': [[1, 1]],
    //     '12': [[0, 2]],
    //     '20': [[2, 0]],
    //     '21': [[2, 1]],
    //     '22': [[2, 2]],
    // }

    let affectedPositions = {}
    movement.forEach( (element,i) => {
        element.forEach( (position, j) => {
            if (position === 1) {
                let key = `${i}${j}`
                affectedPositions[key] = [[0,0]]
            }
        })
    })

    return affectedPositions
}

function waitForPlayerAbilityAction(availablePositions, unit, ability, abilityAffectedPositions, abilityIndex) {
    let clickButton = false;
    let isAvailablePosition

    window.onclick = e => {
        e.preventDefault()
        if ( clickButton ) {
            let targetElementId = e.target.id
            let positionXYAtTarget = getPositionAsXYFromId(targetElementId)
            isAvailablePosition = availablePositions.some( position => (positionXYAtTarget.x === position.x && positionXYAtTarget.y === position.y))
            removeColorAvailablePositions(availablePositions, availablePositionsAbilitiesColor)
            if(isAvailablePosition) {
                let futureAbilityPosition = positionXYAtTarget
                setUnitFutureAbilityPosition(unit, ability, futureAbilityPosition, abilityIndex)

            }
            removeColorHoverAvailablePositions(abilityAffectedPositions)
            removeAvailablePositionsEventListeners(abilityAffectedPositions);
            setUiEnabled()
            window.onclick = null
        }
        clickButton = true
    }
}

function removeAvailablePositionsEventListeners(abilityAffectedPositions){

    Object.entries(abilityAffectedPositions).forEach( value => {
        let element = document.getElementById(value[0])

        element.replaceWith(element.cloneNode(true));
    })
}

function executeUnitsAbilites(players) {
    players.forEach( (player, pIndex) => {
        player.units.forEach( (unit, uIndex) => {
            if (unit.futureAbilities.length !== 0) {
                let futureAbilities = unit.futureAbilities

                futureAbilities.forEach( futureAbility => {
                    // 0 because we do not have an array of abilities for each unit.. yet
                    let theAbility = unit.abilities.filter( ability => ability.id === futureAbility[0].id )[0]
                    let abilityAffectedPositions = getAbilityAffectedPositions(unit.futurePosition, theAbility)
                    let abilityAffectedPositionsFromSelectedPosition = getAbilityAffectedPositionsFromSelectedPosition(abilityAffectedPositions, futureAbility[0].position)
                    let testPosition = {x: abilityAffectedPositionsFromSelectedPosition[0][0], y: abilityAffectedPositionsFromSelectedPosition[0][1] }
                    theAbility.moves ? setUnitFuturePosition(unit, testPosition) : ''
                })
            }
        })
    })
}

function resetUnitFutureAbilities(unit) {
    unit.futureAbilities = []
}

function getAbilityAffectedPositionsFromSelectedPosition(abilityAffectedPositions, selectedPosition) {
    selectedPosition = getPositionAsIdFromXY(selectedPosition)
    let affectedPositions = abilityAffectedPositions[selectedPosition]
    return affectedPositions
}

function clearUnitMovementsAbilities(unit) {
};