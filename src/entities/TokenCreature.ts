import { uuidv4 } from "../utils/uuidv4"
import { DEFAULT_TOKEN_CREATURE_OPTIONS, TokenCreatureOptions } from "../@types/token"

export class TokenCreature {
  private _options!: TokenCreatureOptions

  private _summoningSickness = true

  private _tapped: boolean

  private _power!: number

  private _toughness!: number

  public readonly uuid: string

  get canAttack(): boolean {
    return !this._summoningSickness && !this._tapped
  }

  get power(): number {
    return this._power
  }

  get toughness(): number {
    return this._toughness
  }

  get isTapped(): boolean {
    return this._tapped
  }

  get hasSummoningSickness(): boolean {
    return this._summoningSickness
  }

  constructor(options: Partial<TokenCreatureOptions>) {
    this._options = {
      ...DEFAULT_TOKEN_CREATURE_OPTIONS,
      ...options,
    }

    this._tapped = this._options.isTapped
    this._summoningSickness = this._options.hasSummoningSickness
    this.uuid = uuidv4()
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
