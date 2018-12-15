"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Unknown"] = 0] = "Unknown";
    TokenType[TokenType["Address"] = 1] = "Address";
    TokenType[TokenType["Color"] = 2] = "Color";
    TokenType[TokenType["Root"] = 3] = "Root";
    TokenType[TokenType["Reference"] = 4] = "Reference";
    TokenType[TokenType["Parent"] = 5] = "Parent";
    TokenType[TokenType["Outward"] = 6] = "Outward";
    TokenType[TokenType["String"] = 7] = "String";
    TokenType[TokenType["Comment"] = 8] = "Comment";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var ValueType;
(function (ValueType) {
    ValueType[ValueType["nul"] = 0] = "nul";
    ValueType[ValueType["txt"] = 1] = "txt";
    ValueType[ValueType["dec"] = 2] = "dec";
    ValueType[ValueType["hex"] = 3] = "hex";
})(ValueType = exports.ValueType || (exports.ValueType = {}));
class GrammarToken {
    constructor(token) {
        this._s = token;
        ({ type: this._t, value: this._v } = GrammarToken.parse(token));
    }
    static parse(t) {
        const retval = {
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
    get source() {
        return this._s;
    }
}
GrammarToken.typeMap = {
    "@": TokenType.Address,
    "#": TokenType.Color,
    "/": TokenType.Root,
    "&": TokenType.Reference,
    "^": TokenType.Parent,
    "!": TokenType.Outward,
    ",": TokenType.Comment,
    "'": TokenType.Address
};
exports.GrammarToken = GrammarToken;
