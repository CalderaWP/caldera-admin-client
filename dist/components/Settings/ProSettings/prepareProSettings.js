'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.prepareProSettings = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _prepareSettings = require('../../../state/prepareSettings');

var _configFields = require('./configFields');

var _configFields2 = _interopRequireDefault(_configFields);

var _proSettingsType = require('./proSettingsType');

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prepareProSettings = exports.prepareProSettings = function prepareProSettings() {
	var _settingsBasic, _PRO_API_KEYS, _PRO_GENERAL_SETTINGS, _ref;

	var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var settingsBasic = (_settingsBasic = {}, _defineProperty(_settingsBasic, _proSettingsType.PRO_CONNECTED, false), _defineProperty(_settingsBasic, _configFields.PRO_API_KEYS, {}), _defineProperty(_settingsBasic, _configFields.PRO_GENERAL_SETTINGS, {}), _settingsBasic);
	if (undefined !== (typeof settings === 'undefined' ? 'undefined' : _typeof(settings))) {
		settings = (0, _deepmerge2.default)(settingsBasic, settings);
	} else {
		settings = settingsBasic;
	}

	return _ref = {}, _defineProperty(_ref, _proSettingsType.PRO_CONNECTED, (0, _prepareSettings.settingsProp)(settings, _proSettingsType.PRO_CONNECTED, false)), _defineProperty(_ref, _configFields.PRO_API_KEYS, (_PRO_API_KEYS = {}, _defineProperty(_PRO_API_KEYS, _configFields.PUBLIC_KEY, (0, _prepareSettings.settingsProp)(settings[_configFields.PRO_API_KEYS], _configFields.PUBLIC_KEY, _configFields2.default[_configFields.PRO_API_KEYS].find(function (field) {
		return _configFields.PUBLIC_KEY === field.id;
	}).default)), _defineProperty(_PRO_API_KEYS, _configFields.PRIVATE_KEY, (0, _prepareSettings.settingsProp)(settings[_configFields.PRO_API_KEYS], _configFields.PRIVATE_KEY, _configFields2.default[_configFields.PRO_API_KEYS].find(function (field) {
		return _configFields.PRIVATE_KEY === field.id;
	}).default)), _PRO_API_KEYS)), _defineProperty(_ref, _configFields.PRO_GENERAL_SETTINGS, (_PRO_GENERAL_SETTINGS = {}, _defineProperty(_PRO_GENERAL_SETTINGS, _configFields.ENHANCED_DELIVERY, (0, _prepareSettings.settingsProp)(settings[_configFields.PRO_GENERAL_SETTINGS], _configFields.ENHANCED_DELIVERY, _configFields2.default[_configFields.PRO_GENERAL_SETTINGS].find(function (field) {
		return _configFields.ENHANCED_DELIVERY === field.id;
	}).default)), _defineProperty(_PRO_GENERAL_SETTINGS, _configFields.LOG_LEVEL, (0, _prepareSettings.settingsProp)(settings[_configFields.PRO_GENERAL_SETTINGS], _configFields.LOG_LEVEL, _configFields2.default[_configFields.PRO_GENERAL_SETTINGS].find(function (field) {
		return _configFields.LOG_LEVEL === field.id;
	}).default)), _PRO_GENERAL_SETTINGS)), _defineProperty(_ref, 'forms', (0, _prepareSettings.settingsProp)(settings, 'forms', {})), _ref;
};