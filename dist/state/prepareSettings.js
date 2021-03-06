'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareSettings = exports.settingsProp = undefined;

var _generalSettingsType = require('../components/Settings/GeneralSettings/generalSettingsType');

var _proSettingsType = require('../components/Settings/ProSettings/proSettingsType');

var _prepareProSettings = require('../components/Settings/ProSettings/prepareProSettings');

var _prepareGeneralSettings = require('../components/Settings/GeneralSettings/prepareGeneralSettings');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Get a property from settings object
 *
 * @param {Object} settings Settings to search in
 * @param {String} prop Name of enumerable key in object to find
 * @param {String|Number|Array} defaultValue Fallback value
 * @return {String|Number|Array}
 */
var settingsProp = exports.settingsProp = function settingsProp(settings, prop, defaultValue) {
  return settings.hasOwnProperty(prop) ? settings[prop] : defaultValue;
};

/**
 * Prepare Caldera Forms settings
 * @param {Object} settings Settings to prepare
 *
 * @return {{privacySettings: {}, [p: string]: {}}}
 */
var prepareSettings = exports.prepareSettings = function prepareSettings(settings) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, _generalSettingsType.GENERAL_SETTINGS, (0, _prepareGeneralSettings.prepareGeneralSettings)(settingsProp(settings, 'styleIncludes', {}), settingsProp(settings, 'otherSettings', {}))), _defineProperty(_ref, _proSettingsType.PRO_SETTINGS, (0, _prepareProSettings.prepareProSettings)(settingsProp(settings, _proSettingsType.PRO_SETTINGS, {}))), _defineProperty(_ref, 'privacySettings', {}), _ref;
};