import { TokenCreatureOptions } from "./token"

export const DEFAULT_LIBRARY_ENTRY_DATA = {
  isFavorite: false,
  name: "Token",
  slug: "",
}

export type LibraryEntry = typeof DEFAULT_LIBRARY_ENTRY_DATA & {
  tokenOptions: TokenCreatureOptions
}
