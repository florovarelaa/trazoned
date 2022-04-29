
MVP a desarrollar.
- 1 turno de 2 fases
    - 1er fase los jugadores planean los pasos de su unidad
        - 4 pasos
            - movimiento
            - habilidad
            - movimiento
            - habilidad
    - 2da fase se ejecutan los pasos establecidos por los jugadores
      el orden de los eventos de un paso es:
        - movimiento
        - choque
        - efecto de la celda. si se desplaza por viento cuenta la posicion final.
        - habilidades
        - efecto de habilidades
        - sustain
        - verificacion de muerte. Hasta este entonces todo esta "vivo" puede tener vida negativa y que sea curado.
       
- 1 mapa, 40x40, algunas de las casillas tienen efectos:
    - torbellinos que desplazan a las unidades a otra casilla entre pasos de la fase, 
    - curacion entre pasos de la fase
    - daño entre pasos de la fase
    - una casilla con loot cada 10 turnos
    - casillas inaccesibles
    - la nieve que se cierra
    - fog of war

- 4 slots de habilidad para cada jugador. Empieza con 0 desbloqueado y hay que desbloquear 4
    - lvl 1 - 1 lobo
    - lvl 2 - 1 lobo
    - lvl 3 - 1 lobo
    - lvl 4 - 1 lobo

- 2 jugadores que deben elegir 1 de 4 clases
    - mago
    - guerrero
    - cazador
    - curador

- 4 clases con 2 habilidades basicas c/u

- 7 movimientos. que deberan ser elegidos.
    se debera elegir un slot de movimiento inicial para cada categoria a-d.
        - a - 1 casillas, a todos lados
        - b - 2 casilla, caballo
        - b - 2 casillas, no-caballo
        - c - 2 casillas en linea recta
        - c - 2 casillas en diagonal
        - d - 3 casillas en linea recta
        - d - 3 casillas en diagonal

- 7 cartas de habilidad por clase.

- 2 unidades neutrales.
    - boss: dragon
        - buff especial. tus cartas tienen 1 menos de cd.
    - burro

- posibilidad de cambiar 2 cartas listas para usar por 1 que debera cargarse

- experiencia

- inventory de 4 slots

- equipment
    - weapon

- loot
    - pociones
        - vida
            T3 - 10
        - modificador de slot movimiento 1 turno
            T1 - 2 celdas recto <-> 2 celdas diagonal
            T1 - 2 celdas caballo <-> 2 celd as no caballo
            T2 - 3 celdas recto <-> 3 celdas diagonal
            T2 - 1 celda recto/diagonal <-> 2 celdas caballo/no caballo
            T3 - 1 celda recto/diagonal <-> 3 celdas recto/diagonal
        - pocion de escudo
            T3 - 2 turnos
    - armas
        - T4 - mira 4 cartas de tu mazo. elije 1 para que robes siguiente. 1 carga
        - T3 - daño/curacion +1
        - T3 - deja un dot al dañar
        - T2 - la siguiente habilidad de la unidad dañada tendra *cast*
        - T1 - daño/curacion +2. Tus habilidades tienen *hybrid*. 5 cargas.

    - cartas de habilidad de cualquier unidad

--
Game Arquitecture

-Game controler
    - fase timer: number
    - fase activa: bit
    - map
        - width: number
        - height: number
        - [width, height]: mapCell
            mapCell: 
                - occupied: bool
                - blocked: bool
                - unit: Unit
                - mapEffect
                    - type: enum
                    - value: number
                - sustain:
                    - type: enum
                    - value: number
                    - remainingTurns: number
                - loot: loot

    - mapa paso previo 1: map
    - mapa paso previo 2: map
    - mapa paso previo 3: map

PlayerController
- deck
- movements
- slots
    - ability
    - movement
- Unit
    - position: [number, number]
    - ability1: ability
    - ability2: ability
    - maxHealth: number
    - currentHealth: number
    - buffs: [buffs]
- inventory: 
    -weapon: weapon
- movements: [movement] [0-3]
    - movement: 
        - id
        - cooldown: number
        - shape: [bit, bit]
- ability
    - id
    - name
    - class
    - cooldown
    - selectCells: shape
    - affectedCells: shape
    - value: number
    - text: string
    - self: boolean
    - targeted: boolean
    - isMovement: boolean
    - keyword: enum
    - sustain: {
        type: enum
        value: number
        turns : number
    }

loot, pickable, dropable, consumable, wearable
    - weapon
        - id
        - text
        - keyword: enum
        - value: number
        - charges: number
    - potion
        - id
        - value
        - type: enum
    - itemAbility: ability

    keywords 
            Exhaust.
                Bloquea el siguiente movimiento de la unidad seleccionada.
            
            Silence
                Bloquea la siguiente habilidad.

            Sustain(X)
                Se mantiene en la unidad o el area (X) turnos. 0 indica hasta el final del turno.

            Fast
                Se castea antes que el movimiento anterior.

            Slow
                se castea despues del movimiento siguiente.

            Firstly
                Solo se puede tirar despues del primer movimiento.

            Secondly
                Solo se puede tirar despues del segundo movimiento.

            Hybrid
                Se puede usar en un slot de movimiento.