"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Introduces lifecycle methods into the component.
 */
function useLifecycle({ componentWillMount, componentDidMount, componentWillUnmount }) {
    (0, react_1.useState)(componentWillMount);
    (0, react_1.useEffect)(function effect() {
        componentDidMount && componentDidMount();
        return componentWillUnmount;
    }, []);
}
exports.default = useLifecycle;
