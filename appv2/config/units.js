import { unit } from '../models/unit.js'
import { abilities } from './abilities.js'

let warriorAbilities = [abilities.warrior0, abilities.warrior1]
let mageAbilities = [abilities.mage0, abilities.mage1]

let warrior = new unit(0, null, 'Warrior', 10, null, warriorAbilities, null)
let warrior2 = new unit(0, null, 'Warrior2', 10, null, warriorAbilities, null)
let mage = new unit(1, null, 'Mage', 10, null, mageAbilities, null)
let mage2 = new unit(1, null, 'Mage2', 10, null, mageAbilities, null)

export let units = {
    warrior: warrior,
    mage: mage,
    warrior2: warrior2,
    mage2: mage2,
}