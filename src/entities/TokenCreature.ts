import { ManaType } from "../@types/magic"

const DEFAULT_TOKEN_CREATURE_OPTIONS = {
  power: 1,
  toughness: 1,
  tapped: false,
  mana: [ManaType.RED],
}

export class TokenCreature {
  private _options!: typeof DEFAULT_TOKEN_CREATURE_OPTIONS

  private _summoningSickness = true

  private _tapped: boolean

  private _power!: number

  private _toughness!: number

  get canAttack(): boolean {
    return !this._summoningSickness && !this._tapped
  }

  get power(): number {
    return this._power
  }

  get toughness(): number {
    return this._toughness
  }

  get hasSummoningSickness(): boolean {
    return this._summoningSickness
  }

  constructor(options: Partial<typeof DEFAULT_TOKEN_CREATURE_OPTIONS>) {
    this._options = {
      ...DEFAULT_TOKEN_CREATURE_OPTIONS,
      ...options,
    }

    this._tapped = this._options.tapped
    this.reset()
  }

  public attack(): void {
    if (this._summoningSickness) {
      return
    }

    this._tapped = true
  }

  public clear(): void {
    this._summoningSickness = false
    this._tapped = false
  }

  private reset(): void {
    this._power = this._options.power
    this._toughness = this._options.toughness
  }
}
