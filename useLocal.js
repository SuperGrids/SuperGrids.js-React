"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Returns an object that retains value between renders.
 * Typically used to store state without causing render.
 * Similar to `this` pointer in class components.
 * Can return an array if initialState is an array.
 */
exports.default = (function useLocal(initialState = {}) { return (0, react_1.useState)(initialState)[0]; });
