export let uiService = {
    buildUi(config, nextFaseFunc, moveBtnFunc, abilityBtnFunc) {
        this.config = config
        let { ui, boardSize, players, initialUnitsHealth } = config
        createBoard(boardSize, ui.cellSize)
        setNextFaseBtn(nextFaseFunc)
        createPlayersBtn(players, initialUnitsHealth)
        addEventListenersToPlayersButtons(players, moveBtnFunc, abilityBtnFunc, boardSize)
        // this.setUiDisabled()
    },
    setUiDisabled: setUiDisabled,
    setUiEnabled: setUiEnabled
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

function setNextFaseBtn(nextFaseFunc) {
    let nextFaseBtn = document.getElementById('btn-next-fase')
    nextFaseBtn.onclick = nextFaseFunc
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


function addEventListenersToPlayersButtons(players, moveBtnFunc, abilityBtnFunc, boardSize) {
    players.forEach( (player, playerIndex) => {
        let playerId = `ui-player-${playerIndex}`
        let units = player.units
        units.forEach( (unit, unitIndex) => {
            unit.steps.forEach( (step, stepIndex) => {
                let moveButtonId = `${playerId}-unit-${unitIndex}-step-${stepIndex}-move`
                let moveButton = document.getElementById(moveButtonId)
                
                moveButton.addEventListener('click', () => moveBtnFunc(unit, player.movements[0], stepIndex, boardSize))

                let unitAbilities = unit.abilities
                unitAbilities.forEach( (ability, abilityIndex) => {
                    let abilityButtonId = `${playerId}-unit-${unitIndex}-ability-${abilityIndex}-step-${stepIndex}`
                    let abilityButton = document.getElementById(abilityButtonId)
                    abilityButton.addEventListener('click', () => abilityBtnFunc(unit, ability, stepIndex, boardSize))
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

