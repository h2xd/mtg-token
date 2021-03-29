import { LibraryEntry } from "../@types/library"
import { DEFAULT_TOKEN_CREATURE_OPTIONS } from "../@types/token"
import { ManaType } from "../@types/mana"

export const BeastLibraryItem: LibraryEntry = {
  name: "Beast",
  slug: "beast",
  isFavorite: false,
  tokenOptions: {
    ...DEFAULT_TOKEN_CREATURE_OPTIONS,
    power: 3,
    toughness: 3,
    mana: [ManaType.GREEN],
  },
}
