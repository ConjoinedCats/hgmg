export declare enum TokenType {
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
export declare enum ValueType {
    nul = 0,
    txt = 1,
    dec = 2,
    hex = 3
}
export interface IToken {
    type: TokenType;
    value: string;
}
export declare class GrammarToken {
    private _s;
    private _t;
    private _v;
    protected static typeMap: {
        [key: string]: TokenType;
    };
    constructor(token: string);
    static parse(t: string): IToken;
    readonly source: string;
}
