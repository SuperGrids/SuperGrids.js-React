"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useLocal_1 = __importDefault(require("./useLocal"));
/**
 * Similar to `useEffect`, but executes before render.
 * `usePreEffect` helps you avoid `setState` in some non-async cases, hence reducing renders.
 * Avoid `setState` inside non-async `usePreEffect` as the component is already about to render, set `local.state=value` via `useLocal` instead.
 */
function usePreEffect(effect, deps) {
    const oldDeps = (0, useLocal_1.default)([]);
    const prevDeps = [...oldDeps];
    const changed = [];
    let didChange = false;
    for (let i in deps)
        (changed[i] = oldDeps[i] !== deps[i]) && (didChange = true) && (oldDeps[i] = deps[i]);
    didChange && effect(deps, prevDeps, changed);
}
exports.default = usePreEffect;
