"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useLocal_1 = __importDefault(require("./useLocal"));
/**
 * `useLogChanges` prints changes in deps.
 * eg: `useLogChanges({dep1,dep2,dep3})`.
 * eg: `useLogChanges([dep1,dep2,dep3])`.
 * eg: `useLogChanges(myObject)`.
 * eg: `useLogChanges(myArray)`.
 */
function useLogChanges(deps) {
    const isArray = Array.isArray(deps);
    const oldDeps = (0, useLocal_1.default)(isArray ? [] : {});
    const changedIndexes = [];
    const oldVals = [];
    const newVals = [];
    for (let i in deps)
        if (oldDeps[i] !== deps[i]) { // eslint-disable-line no-cond-assign
            changedIndexes.push(i);
            oldVals.push(oldDeps[i]);
            newVals.push(deps[i]);
            oldDeps[i] = deps[i];
        }
    if (changedIndexes.length)
        console.log(`useLogChanges: Changed`, changedIndexes, oldVals, newVals);
}
exports.default = useLogChanges;
