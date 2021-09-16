export let uiService = {
    buildUi(config, nextFaseFunc, moveBtnFunc, abilityBtnFunc) {
        this.config = config
        let { ui, boardSize, players, initialUnitsHealth, potentialMovementColor, potentialAbilityColor } = config
        createBoard(boardSize, ui.cellSize)
        setNextFaseBtn(nextFaseFunc, config)
        createPlayersBtn(players, initialUnitsHealth)
        addEventListenersToPlayersButtons(players, moveBtnFunc, abilityBtnFunc, boardSize, potentialMovementColor, potentialAbilityColor)
        drawUnitsOnBoard(players, ui.cellSize)
        // this.setUiDisabled()
    },
    setUiDisabled: setUiDisabled,
    setUiEnabled: setUiEnabled, 
    addColorAvailablePositions: addColorAvailablePositions,
    removeColorAvailablePositions: removeColorAvailablePositions
}

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

function setNextFaseBtn(nextFaseFunc, config) {
    let nextFaseBtn = document.getElementById('btn-next-fase')
    nextFaseBtn.addEventListener('click', () => {
        nextFaseFunc()
        eraseUnitsOnBoard()
        drawUnitsOnBoard(config.players, config.ui.cellSize)
        updateUnitsHealth(config.players, config.initialUnitsHealth)
    })
}

function createPlayersBtn(players, initialUnitsHealth) {

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
            createUiTag('div', `${idUnit}-health`, uiUnit, 'unit-health', `${unit.health}/${initialUnitsHealth} ❤`)

            unit.steps.forEach( (step, stepIndex) => {

                createUiTag('div', `${idUnit}-step-${stepIndex}-container`, uiUnit, '', `Step: ${stepIndex}`)
                createUiTag('button', `${idUnit}-step-${stepIndex}-move`, uiUnit, 'unit-button unit-button-movement', 'Move')
                
                unit.abilities.forEach( (ability, abilityIndex) => {
                    createUiTag('button', `${idUnit}-ability-${abilityIndex}-step-${stepIndex}`, uiUnit, `unit-button unit-button-ability-${abilityIndex}`, ability.name)
                })
            })
        })
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


function addEventListenersToPlayersButtons(players, moveBtnFunc, abilityBtnFunc, boardSize, potentialMovementColor, potentialAbilityColor) {
    players.forEach( (player, playerIndex) => {
        let playerId = `ui-player-${playerIndex}`
        let units = player.units
        units.forEach( (unit, unitIndex) => {
            unit.steps.forEach( (step, stepIndex) => {
                let moveButtonId = `${playerId}-unit-${unitIndex}-step-${stepIndex}-move`
                let moveButton = document.getElementById(moveButtonId)
                
                moveButton.addEventListener('click', () => moveBtnFunc(unit, player.movements[0], stepIndex, boardSize, potentialMovementColor))

                let unitAbilities = unit.abilities
                unitAbilities.forEach( (ability, abilityIndex) => {
                    let abilityButtonId = `${playerId}-unit-${unitIndex}-ability-${abilityIndex}-step-${stepIndex}`
                    let abilityButton = document.getElementById(abilityButtonId)
                    abilityButton.addEventListener('click', () => abilityBtnFunc(unit, ability, stepIndex, boardSize, potentialAbilityColor))
                })
            })
        })
    })
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

function drawUnitsOnBoard(players, cellSize) {
    players.forEach( player => {
        player.units.forEach(unit => {
            drawUnitOnBoard(unit, player.color, cellSize)
        })
    })
}

function eraseUnitsOnBoard() {
    let cellsWithUnits = document.getElementsByClassName('board-unit-img')
    cellsWithUnits = Array.prototype.slice.call( cellsWithUnits )
    cellsWithUnits.forEach( element => {
        element.parentNode.removeChild(element)
    })
}

function drawUnitOnBoard(unit, color, cellSize) {
    let unitImage = document.createElement('div')
    unitImage.innerHTML = unit.name;
    let unitImageDimensions = cellSize - 0.15 * cellSize
    unitImage.style.width = `${unitImageDimensions}px`
    unitImage.style.height = `${unitImageDimensions}px`
    unitImage.style.backgroundColor = color;
    unitImage.classList.add('board-unit-img')
    unitImage.style.fontSize = `${0.25 * cellSize}px`
    //Aca es el arreglo
    //let cellId = (position.x != undefined && position.y !=undefined ) ? `${position.x}${position.y}` : position
    let cellId = `x${unit.position.x}y${unit.position.y}`
    document.getElementById(cellId).appendChild(unitImage)
}

function addColorAvailablePositions(positions, color) {
    positions.forEach( position => {
        let cellId = `x${position.position.x}y${position.position.y}`
        let cellHtmlElementdocument = document.getElementById(cellId)
        cellHtmlElementdocument.classList.add(`color-${color}`)
    })
}

function removeColorAvailablePositions(positions, color) {
    positions.forEach( position => {
        let cellId = `x${position.position.x}y${position.position.y}`
        let cellHtmlElementdocument = document.getElementById(cellId)
        cellHtmlElementdocument.classList.remove(`color-${color}`)
    })
}

function updateUnitsHealth(players, initialUnitsHealth) {
    players.forEach( (player, playerIndex) => {
        let idPlayer = `ui-player-${playerIndex}`

        player.units.forEach( (unit, unitIndex) => {
            let idUnit = `${idPlayer}-unit-${unitIndex}`
            document.getElementById(`${idUnit}-health`).innerHTML = `${unit.health}/${initialUnitsHealth} ❤`
        })
    })
}