import { RootState } from "./root"

export const playerIsAlive = (state: RootState) => state.user.profile.hp! > 0

export const monsterIsAlive = (state: RootState) => state.battle.monsterHealth! > 0