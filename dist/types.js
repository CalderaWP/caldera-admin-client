'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.collectionTypes = undefined;

var _PropTypes$shape;

var _formType = require('./components/EntryViewer/formType');

var _formType2 = _interopRequireDefault(_formType);

var _entryType = require('./components/EntryViewer/entryType');

var _entryType2 = _interopRequireDefault(_entryType);

var _proSettingsType = require('./components/Settings/ProSettings/proSettingsType');

var _proSettingsType2 = _interopRequireDefault(_proSettingsType);

var _statusType = require('./components/Layout/statusType');

var _statusType2 = _interopRequireDefault(_statusType);

var _privacySettingsType = require('./components/Settings/PrivacySettings/privacySettingsType');

var _privacySettingsType2 = _interopRequireDefault(_privacySettingsType);

var _generalSettingsType = require('./components/Settings/GeneralSettings/generalSettingsType');

var _generalSettingsType2 = _interopRequireDefault(_generalSettingsType);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Prop types for collections of data types
 *
 * @type {{formsType: shim, entriesType: shim, proSettingsType: shim}}
 */
var collectionTypes = exports.collectionTypes = {
	formsType: _propTypes2.default.object,
	entriesType: _propTypes2.default.object,
	settingsType: _propTypes2.default.shape((_PropTypes$shape = {}, _defineProperty(_PropTypes$shape, _proSettingsType.PRO_SETTINGS, _propTypes2.default.object), _defineProperty(_PropTypes$shape, _generalSettingsType.GENERAL_SETTINGS, _propTypes2.default.object), _defineProperty(_PropTypes$shape, 'privacySettings', _propTypes2.default.object), _PropTypes$shape))

};

/**
 * Prop types for singular data types.
 */
exports.default = {
	formType: _formType2.default,
	entryType: _entryType2.default,
	proSettingsType: _proSettingsType2.default,
	generalSettingsType: _generalSettingsType2.default,
	privacySettingsType: _privacySettingsType2.default,
	statusType: _statusType2.default
};