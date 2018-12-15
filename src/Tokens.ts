export enum TokenType {
  Unknown = 0,
  Address = 1,
  Color = 2,
  Root = 3,
  Reference = 4,
  Parent = 5,
  Outward = 6,
  String = 7,
  Comment = 8
}

export enum ValueType {
  nul = 0,
  txt = 1,
  dec = 2,
  hex = 3
}

export interface IToken {
  type: TokenType;
  value: string;
}

export class GrammarToken {
  private _s: string;
  private _t: TokenType;
  private _v: string;

  protected static typeMap: { [key: string]: TokenType } = {
    "@": TokenType.Address,
    "#": TokenType.Color,
    "/": TokenType.Root,
    "&": TokenType.Reference,
    "^": TokenType.Parent,
    "!": TokenType.Outward,
    ",": TokenType.Comment,
    "'": TokenType.Address
  }

  constructor(token: string) {
    this._s = token;
    ({ type: this._t, value: this._v } = GrammarToken.parse(token));
  }

  static parse(t: string): IToken {
    const retval: IToken = {
      type: TokenType.Unknown,
      value: ""
    };

    if (t.length > 0) {
      const f = t.charAt(0);

      retval.type = GrammarToken.typeMap[f] || TokenType.Unknown;
      if (retval.type !== TokenType.Comment && retval.type !== TokenType.Unknown) {
        // const r = (t.length > 1) ? t.substring(1) : "";
        if (t.length > 1) {
          retval.value = t.substring(1);
        }
      }
    }
    return retval;
  }

  get source(): string {
    return this._s;
  }
} 