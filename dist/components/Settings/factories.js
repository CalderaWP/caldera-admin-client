'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.proLocalSettingsFactory = undefined;

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Provides CF Pro Local settings, with defaults merged to stored values.
 *
 * @param {Object} stored Stored values
 */
var proLocalSettingsFactory = exports.proLocalSettingsFactory = function proLocalSettingsFactory() {
	var stored = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var defaults = {
		connected: false,
		generalSettings: {
			enhancedDelivery: false,
			generatePDFs: false,
			logLevel: 200
		},
		apiKeys: {
			public: '',
			secret: '',
			token: ''
		}

	};
	return (0, _deepmerge2.default)(defaults, stored);
};