export declare class QPhrase {
    private _str;
    private _tkns;
    constructor(input: string);
    static parse(input: string): Array<QToken>;
}
export declare class QToken {
    private _s;
    private static _re;
    constructor(s: string);
    readonly value: string;
    static isValid(input: string): boolean;
}
export declare enum TokenType {
    Address = 0,
    Color = 1,
    Class = 2,
    Function = 3,
    Root = 4
}
export declare class Token {
    private static _symbols;
    static symbol(type: TokenType): string;
}
