import { ManaType } from "../@types/mana"

function extractBackground(mana: ManaType): string {
  return `var(--mana-color-${mana}-background)`
}

function extractText(mana: ManaType): string {
  return `var(--mana-color-${mana}-text)`
}

const DEFAULT_PROPERTY_NAMES = {
  backgroundKey: "--mana-background",
  textKey: "--mana-text",
}

type Options = typeof DEFAULT_PROPERTY_NAMES

export function manaToCustomProperties(mana: ManaType, options: Partial<Options>): Record<string, string> {
  const { backgroundKey, textKey } = {
    ...DEFAULT_PROPERTY_NAMES,
    ...options,
  }

  return {
    [backgroundKey]: extractBackground(mana),
    [textKey]: extractText(mana),
  }
}
