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
  value: ValueType;
}

export class GrammarToken {
  private _s: string;
  private _t: TokenType;
  private _v: ValueType;

  private map = {
    "@": {
      type: TokenType.Address
    },
    "#": {
      type: TokenType.Address
    },
    "/": {
      type: TokenType.Address
    },
    "&": {
      type: TokenType.Address
    },
    "^": {
      type: TokenType.Address
    },
    "!": {
      type: TokenType.Address
    },
    ",": {
      type: TokenType.Comment
    },
    "'": {
      type: TokenType.Address
    }
  }

  constructor(token: string) {
    this._s = token;
    ({ type: this._t, value: this._v } = GrammarToken.parse(token));
  }

  static parse(t: string): IToken {
    const retval = {
      type: TokenType.Unknown,
      value: ValueType.nul
    };

    return retval;
  }

  get source(): string {
    return this._s;
  }
} 