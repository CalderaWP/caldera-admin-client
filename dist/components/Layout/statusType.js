"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.statusShape = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statusShape = exports.statusShape = {
	message: _propTypes2.default.string,
	show: _propTypes2.default.bool,
	success: _propTypes2.default.bool,
	updating: _propTypes2.default.bool
};
/**
 * Prop types for Status component that shows message and/or spinner
 */
exports.default = _propTypes2.default.shape(statusShape);