'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PRO_FORM_SETTINGS = exports.PRO_GENERAL_SETTINGS = exports.PRO_API_KEYS = exports.GENEREATE_PDFS = exports.LOG_LEVEL = exports.ENHANCED_DELIVERY = exports.PRIVATE_KEY = exports.PUBLIC_KEY = undefined;

var _PRO_API_KEYS$PRO_GEN;

var _optionFactory = require('../../util/optionFactory');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PUBLIC_KEY = exports.PUBLIC_KEY = 'proPublicKey';
var PRIVATE_KEY = exports.PRIVATE_KEY = 'propPrivateKey';
var ENHANCED_DELIVERY = exports.ENHANCED_DELIVERY = 'enhancedDelivery';
var LOG_LEVEL = exports.LOG_LEVEL = 'logLevel';
var GENEREATE_PDFS = exports.GENEREATE_PDFS = 'generatePDFs';
var PRO_API_KEYS = exports.PRO_API_KEYS = 'apiKeys';
var PRO_GENERAL_SETTINGS = exports.PRO_GENERAL_SETTINGS = 'generalSettings';
var PRO_FORM_SETTINGS = exports.PRO_FORM_SETTINGS = 'formSettings';

exports.default = (_PRO_API_KEYS$PRO_GEN = {}, _defineProperty(_PRO_API_KEYS$PRO_GEN, PRO_API_KEYS, [{
	id: PUBLIC_KEY,
	label: 'Public Key',
	desc: 'Public Key For Caldera FormsSlot Pro',
	type: 'text',
	path: 'apiKeys.public',
	default: ''
}, {
	id: PRIVATE_KEY,
	label: 'Private Key',
	desc: 'Private Key For Caldera FormsSlot Pro',
	path: 'apiKeys.secret',
	type: 'text',
	options: [{
		label: 'yes',
		value: 'on'
	}],
	default: ''
}]), _defineProperty(_PRO_API_KEYS$PRO_GEN, PRO_GENERAL_SETTINGS, [{
	id: ENHANCED_DELIVERY,
	label: 'Enable Enhanced Delivery',
	desc: 'If enabled, messages are sent via Caldera FormsSlot Pro Servers',
	type: 'checkbox',
	path: 'generalSettings.enhancedDelivery',
	default: true
}, {
	id: LOG_LEVEL,
	label: 'Minimum Log Level',
	desc: 'Setting a higher level than notice may affect performance, and should only be used when instructed by support.',
	type: 'select',
	path: 'generalSettings.logLevel',
	options: [(0, _optionFactory.optionFactory)(100, 'DEBUG'), (0, _optionFactory.optionFactory)(200, 'INFO'), (0, _optionFactory.optionFactory)(300, 'WARNING'), (0, _optionFactory.optionFactory)(400, 'ERROR'), (0, _optionFactory.optionFactory)(500, 'ALERT'), (0, _optionFactory.optionFactory)(600, 'EMERGENCY')],
	default: 400
}]), _defineProperty(_PRO_API_KEYS$PRO_GEN, PRO_FORM_SETTINGS, []), _PRO_API_KEYS$PRO_GEN);