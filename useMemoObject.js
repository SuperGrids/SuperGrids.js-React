"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useLocal_1 = __importDefault(require("./useLocal"));
// TODO-FUTURE: Comparator function
/**
 * Returns a memoized object if passed object has same values from previous render (shallow compare).
 * Especially useful while sending props object to pure / memoized components.
 */
function useMemoObject(obj) {
    const oldObj = (0, useLocal_1.default)();
    const newObj = (0, useLocal_1.default)();
    let changed = false;
    for (let i in obj) {
        newObj[i] = obj[i];
        oldObj[i] !== obj[i] && (changed = true) && (oldObj[i] = obj[i]);
    }
    return changed ? Object.assign({}, newObj) : newObj;
}
exports.default = useMemoObject;
