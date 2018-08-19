'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CalderaAdminWithState = exports.dispatchers = exports.selectors = undefined;

var _CalderaAdmin = require('./CalderaAdmin');

var _CalderaAdmin2 = _interopRequireDefault(_CalderaAdmin);

var _compose = require('@wordpress/compose');

var _data = require('@wordpress/data');

var _state = require('@caldera-labs/state');

var _store = require('./store');

var _proSettingsType = require('./components/Settings/ProSettings/proSettingsType');

var _generalSettingsType = require('./components/Settings/GeneralSettings/generalSettingsType');

var _prepareGeneralSettings = require('./components/Settings/GeneralSettings/prepareGeneralSettings');

var _prepareProSettings = require('./components/Settings/ProSettings/prepareProSettings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Create selector functions
 * @param {Object} select
 * @return {{forms: *}}
 */
var selectors = exports.selectors = function selectors(select) {
	var _settings;

	var _select = select(_store.CALDERA_FORMS_ADMIN_STORE),
	    getForm = _select.getForm,
	    getForms = _select.getForms,
	    getFormPreview = _select.getFormPreview,
	    getFormPreviews = _select.getFormPreviews,
	    getFormPrivacySettings = _select.getFormPrivacySettings,
	    getStyleIncludes = _select.getStyleIncludes,
	    getOtherSettings = _select.getOtherSettings,
	    getCfProFormSetting = _select.getCfProFormSetting,
	    getCfProSettings = _select.getCfProSettings,
	    getPageOfEntries = _select.getPageOfEntries;

	return {
		settings: (_settings = {}, _defineProperty(_settings, _generalSettingsType.GENERAL_SETTINGS, (0, _prepareGeneralSettings.prepareGeneralSettings)(getStyleIncludes(), getOtherSettings())), _defineProperty(_settings, _proSettingsType.PRO_SETTINGS, (0, _prepareProSettings.prepareProSettings)(getCfProSettings())), _defineProperty(_settings, 'privacySettings', {}), _settings),
		forms: getForms(),
		getForm: getForm,
		getForms: getForms,
		getFormPreview: getFormPreview,
		getFormPreviews: getFormPreviews,
		getCfProFormSetting: getCfProFormSetting,
		getPageOfEntries: getPageOfEntries,
		getFormPrivacySettings: getFormPrivacySettings
	};
};

/**
 * Create dispatch action functions
 * @param dispatch
 */
var dispatchers = exports.dispatchers = function dispatchers(dispatch) {
	var _dispatch;

	var actions = _state.store.actions;

	var dispatches = {};
	Object.keys(actions).forEach(function (actionKey) {
		dispatches[actionKey] = actions[actionKey];
	});
	return _dispatch = dispatch(_store.CALDERA_FORMS_ADMIN_STORE), dispatches = _dispatch.dispatches, _dispatch;
};

/**
 * Main admin component wrapped in state
 */
var CalderaAdminWithState = exports.CalderaAdminWithState = (0, _compose.compose)((0, _data.withSelect)(function (select) {
	return selectors(select);
}), (0, _data.withDispatch)(function (dispatch) {
	return dispatchers(dispatch);
}))(_CalderaAdmin2.default);