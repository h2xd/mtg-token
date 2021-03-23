import { LibraryEntry } from "../@types/library"
import { DEFAULT_TOKEN_CREATURE_OPTIONS } from "../@types/token"
import { ManaType } from "../@types/mana"

export const SoldierLibraryItem: LibraryEntry = {
  name: "Soldier",
  slug: "soldier",
  isFavorite: false,
  tokenOptions: {
    ...DEFAULT_TOKEN_CREATURE_OPTIONS,
    power: 1,
    toughness: 1,
    mana: [ManaType.WHITE],
  },
}
