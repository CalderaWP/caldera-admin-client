"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PRO_SETTINGS = exports.PRO_CONNECTED = undefined;

var _PropTypes$shape, _PropTypes$shape2, _PRO_CONNECTED$PRO_AP;

var _configFields = require("./configFields");

var _configFields2 = _interopRequireDefault(_configFields);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pickArray = require("../../util/pickArray");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PRO_CONNECTED = exports.PRO_CONNECTED = 'connected';
var PRO_SETTINGS = exports.PRO_SETTINGS = 'proSettings';

exports.default = (_PRO_CONNECTED$PRO_AP = {}, _defineProperty(_PRO_CONNECTED$PRO_AP, PRO_CONNECTED, _propTypes2.default.bool), _defineProperty(_PRO_CONNECTED$PRO_AP, _configFields.PRO_API_KEYS, _propTypes2.default.shape((_PropTypes$shape = {}, _defineProperty(_PropTypes$shape, _configFields.PUBLIC_KEY, _propTypes2.default.string), _defineProperty(_PropTypes$shape, _configFields.PRIVATE_KEY, _propTypes2.default.string), _PropTypes$shape))), _defineProperty(_PRO_CONNECTED$PRO_AP, _configFields.PRO_GENERAL_SETTINGS, _propTypes2.default.shape((_PropTypes$shape2 = {}, _defineProperty(_PropTypes$shape2, _configFields.ENHANCED_DELIVERY, _propTypes2.default.bool), _defineProperty(_PropTypes$shape2, _configFields.LOG_LEVEL, (0, _pickArray.pickArray)(_configFields2.default[_configFields.PRO_GENERAL_SETTINGS].find(function (setting) {
	return _configFields.LOG_LEVEL === setting.id;
}).options, 'value')), _PropTypes$shape2))), _defineProperty(_PRO_CONNECTED$PRO_AP, "formSettings", _propTypes2.default.object), _PRO_CONNECTED$PRO_AP);