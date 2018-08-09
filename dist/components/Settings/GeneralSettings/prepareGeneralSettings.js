"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.prepareGeneralSettings = undefined;

var _configFields = require("./configFields");

var _prepareSettings = require("../../../state/prepareSettings");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Prepare general Caldera (Forms) settings
 * @param styleIncludes
 * @param otherSettings
 * @return {{[p: string]: *}}
 */
var prepareGeneralSettings = exports.prepareGeneralSettings = function prepareGeneralSettings(styleIncludes) {
	var _ref;

	var otherSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return _ref = {}, _defineProperty(_ref, _configFields.STYLE_FORM, (0, _prepareSettings.settingsProp)(styleIncludes, _configFields.STYLE_FORM, true)), _defineProperty(_ref, _configFields.STYLE_GRID, (0, _prepareSettings.settingsProp)(styleIncludes, _configFields.STYLE_GRID, true)), _defineProperty(_ref, _configFields.STYLE_ALERT, (0, _prepareSettings.settingsProp)(styleIncludes, _configFields.STYLE_ALERT, true)), _defineProperty(_ref, _configFields.CDN_ENABLE, (0, _prepareSettings.settingsProp)(otherSettings, _configFields.CDN_ENABLE, true)), _ref;
};