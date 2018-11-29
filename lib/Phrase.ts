import { BaseToken, QuadToken, OctToken } from "./Tokens";

export class QPhrase {
  private _str: string;
  private _tkns: Array<QuadToken> = [];

  constructor(input: string) {
    this._str = input;
  }

  static parse(input: string): Array<QuadToken> {
    const retval = new Array<QuadToken>();

    const chars = [...input];
    return retval;
  }
}
