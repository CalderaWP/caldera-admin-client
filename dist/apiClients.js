'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.entriesClient = exports.proSettingsClient = exports.generalSettingsClient = exports.privacySettingsClient = exports.formsAdminApiClient = exports.cfAdmin = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*global CF_ADMIN*/
/*eslint no-undef: "error"*/


var _apiClient = require('@caldera-labs/api-client');

var cfAdmin = exports.cfAdmin = {
	rest: {
		nonce: 'object' === (typeof CF_ADMIN === 'undefined' ? 'undefined' : _typeof(CF_ADMIN)) ? CF_ADMIN.rest.nonce : 'theNonce',
		root: 'object' === (typeof CF_ADMIN === 'undefined' ? 'undefined' : _typeof(CF_ADMIN)) ? CF_ADMIN.rest.root : './__MOCK_DATA__/cf-api'
	},
	templates: 'object' === (typeof CF_ADMIN === 'undefined' ? 'undefined' : _typeof(CF_ADMIN)) ? CF_ADMIN.templates : {}
};

/**
 * 1 instance of forms client
 *
 * @type {FormsClient}
 */
var formsAdminApiClient = exports.formsAdminApiClient = (0, _apiClient.wpClientFactory)(cfAdmin.rest.root, cfAdmin.rest.nonce, 'forms');

/**
 * 1 instance of privacy settings client
 *
 * @type {PrivacySettingsClient}
 */
var privacySettingsClient = exports.privacySettingsClient = (0, _apiClient.wpClientFactory)(cfAdmin.rest.root, cfAdmin.rest.nonce, 'privacy');

/**
 * 1 instance of general settings client
 *
 * @type {GeneralSettingClient}
 */
var generalSettingsClient = exports.generalSettingsClient = (0, _apiClient.wpClientFactory)(cfAdmin.rest.root, cfAdmin.rest.nonce, 'settings');

/**
 * 1 instance of pro settings client
 *
 * @type {ProLocalSettingClient}
 */
var proSettingsClient = exports.proSettingsClient = (0, _apiClient.wpClientFactory)(cfAdmin.rest.root, cfAdmin.rest.nonce, 'proLocal');

/**
 * 1 instance of general settings client
 *
 * @type {EntriesClient}
 */
var entriesClient = exports.entriesClient = (0, _apiClient.wpClientFactory)(cfAdmin.rest.root, cfAdmin.rest.nonce, 'entries');

exports.default = {
	formsAdminApiClient: formsAdminApiClient,
	entriesClient: entriesClient,

	privacySettingsClient: privacySettingsClient

};