import { RootState } from "./root"
import { monstersData } from '../data/monsters'

export const playerIsAlive = (state: RootState) => state.user.profile.hp! > 0

export const monsterIsAlive = (state: RootState) => state.battle.monsterHealth! > 0

// this one doesn't even need redux state lol
export const getMonster = () => {
  let randomIndex = Math.floor(Math.random() * monstersData.length)
  console.log('random index:', randomIndex)
  return monstersData[randomIndex]
}