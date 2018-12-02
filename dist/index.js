"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pluralize = __importStar(require("pluralize"));
function getPlural(str) {
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
__export(require("./src/Phrase"));
// export * from "./src/Tokens";
