"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Returns a function that can be used to manually force re-render a component.
 */
function useForceUpdate() {
    const setState = (0, react_1.useState)({})[1];
    return (0, react_1.useCallback)(function forceUpdate() { return setState({}); }, []);
}
exports.default = useForceUpdate;
