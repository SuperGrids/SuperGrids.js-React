"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const react_1 = require("react");
/**
 * Gives a constant UUID.
 */
function useUuid() { return (0, react_1.useState)(uuid_1.v4)[0]; }
exports.default = useUuid;
