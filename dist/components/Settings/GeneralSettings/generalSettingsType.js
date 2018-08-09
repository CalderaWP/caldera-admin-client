'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GENERAL_SETTINGS = undefined;

var _PropTypes$shape;

var _configFields = require('./configFields');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GENERAL_SETTINGS = exports.GENERAL_SETTINGS = 'generalSettings';
exports.default = _propTypes2.default.shape((_PropTypes$shape = {}, _defineProperty(_PropTypes$shape, _configFields.STYLE_GRID, _propTypes2.default.bool), _defineProperty(_PropTypes$shape, _configFields.STYLE_ALERT, _propTypes2.default.bool), _defineProperty(_PropTypes$shape, _configFields.STYLE_FORM, _propTypes2.default.bool), _defineProperty(_PropTypes$shape, _configFields.CDN_ENABLE, _propTypes2.default.bool), _PropTypes$shape));