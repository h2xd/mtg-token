import { ManaType } from "./mana"
import { Attribute } from "./attributes"

export const DEFAULT_TOKEN_CREATURE_OPTIONS = {
  power: 1,
  toughness: 1,
  isTapped: false,
  hasSummoningSickness: true,
  mana: [ManaType.RED],
  attributes: [] as Attribute[],
}

export type TokenCreatureOptions = typeof DEFAULT_TOKEN_CREATURE_OPTIONS
