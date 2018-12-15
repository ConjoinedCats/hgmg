import { GrammarToken } from "./Tokens";

export class GrammarPhrase {
  private src: string;
  private tokens: Array<GrammarToken>;

  constructor(p: string) {
    this.src = p;
    this.tokens = this.src.split(" ").map(x => new GrammarToken(x));
  }

}
// export class QPhrase {
//   private _str: string;
//   private _tkns: Array<QToken> = [];

//   constructor(input: string) {
//     this._str = input;
//   }

//   static parse(input: string): Array<QToken> {
//     const retval = new Array<QToken>();
//     const chars = [...input];
//     chars.forEach((v: string) => {
//       if (QToken.isValid(v)) {
//         retval.push(new QToken(v));
//       }
//     });
//     return retval;
//   }
// }

// export class QToken {
//   private _s: string;
//   private static _re = new RegExp("^[0-3]+$");

//   constructor(s: string) {
//     this._s = s;
//   }

//   get value(): string {
//     return this._s;
//   }

//   static isValid(input: string): boolean {
//     return QToken._re.test(input);
//   }
// }

// export enum TokenType {
//   Address = 0,
//   Color = 1,
//   Class = 2,
//   Function = 3,
//   Root = 4
// }

// export class Token {
//   private static _symbols: Array<string> = ["@", "#", ".", "%", "\\"];

//   public static symbol(type: TokenType): string {
//     const n = <number>type;
//     if (n >= 0 && n < Token._symbols.length) {
//       return this._symbols[type as number];
//     }
//     return "";
//   }
// }
