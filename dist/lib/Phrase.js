"use strict";
// import { BaseToken } from "./Tokens";
Object.defineProperty(exports, "__esModule", { value: true });
class QPhrase {
    constructor(input) {
        this._tkns = [];
        this._str = input;
    }
    static parse(input) {
        const retval = new Array();
        const chars = [...input];
        chars.forEach((v) => {
            if (QToken.isValid(v)) {
                retval.push(new QToken(v));
            }
        });
        return retval;
    }
}
exports.QPhrase = QPhrase;
class QToken {
    constructor(s) {
        this._s = s;
    }
    get value() {
        return this._s;
    }
    static isValid(input) {
        return QToken._re.test(input);
    }
}
QToken._re = new RegExp("^[0-3]+$");
exports.QToken = QToken;
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Address"] = 0] = "Address";
    TokenType[TokenType["Color"] = 1] = "Color";
    TokenType[TokenType["Class"] = 2] = "Class";
    TokenType[TokenType["Function"] = 3] = "Function";
    TokenType[TokenType["Root"] = 4] = "Root";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
class Token {
    static symbol(type) {
        const n = type;
        if (n >= 0 && n < Token._symbols.length) {
            return this._symbols[type];
        }
        return "";
    }
}
Token._symbols = ["@", "#", ".", "%", "\\"];
exports.Token = Token;
