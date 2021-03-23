import { LibraryEntry } from "../@types/library"
import { DEFAULT_TOKEN_CREATURE_OPTIONS } from "../@types/token"
import { ManaType } from "../@types/mana"
import { Attribute } from "../@types/attributes"

export const AngelLibraryItem: LibraryEntry = {
  name: "Angel",
  slug: "angel",
  isFavorite: false,
  tokenOptions: {
    ...DEFAULT_TOKEN_CREATURE_OPTIONS,
    power: 4,
    toughness: 4,
    mana: [ManaType.WHITE],
    attributes: [Attribute.FLYING],
  },
}
