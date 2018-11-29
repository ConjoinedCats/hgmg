// import { BaseToken } from "./Tokens";

export class QPhrase {
  private _str: string;
  private _tkns: Array<QToken> = [];

  constructor(input: string) {
    this._str = input;
  }

  static parse(input: string): Array<QToken> {
    const retval = new Array<QToken>();
    const chars = [...input];
    chars.forEach((v: string) => {
      if (QToken.isValid(v)) {
        retval.push(new QToken(v));
      }
    });
    return retval;
  }
}

export class QToken {
  private _s: string;
  private static _re = new RegExp("^[0-3]+$");

  constructor(s: string) {
    this._s = s;
  }

  get value(): string {
    return this._s;
  }

  static isValid(input: string): boolean {
    return QToken._re.test(input);
  }
}
