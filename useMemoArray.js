"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useLocal_1 = __importDefault(require("./useLocal"));
// TODO-FUTURE: Comparator function
/**
 * Returns a memoized array if passed array has same values from previous render (shallow compare).
 */
function useMemoArray(array) {
    const oldArray = (0, useLocal_1.default)([]);
    const newArray = (0, useLocal_1.default)([]);
    let changed = false;
    for (let i in array) {
        newArray[i] = array[i];
        oldArray[i] !== array[i] && (changed = true) && (oldArray[i] = array[i]);
    }
    return changed ? newArray.slice() : newArray;
}
exports.default = useMemoArray;
