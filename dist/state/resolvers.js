'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resolvers = undefined;

var _apiClients = require('../apiClients');

var _apiClients2 = _interopRequireDefault(_apiClients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var formsAdminApiClient = _apiClients2.default.formsAdminApiClient,
    PrivacySettingsClient = _apiClients2.default.PrivacySettingsClient,
    GeneralSettingClient = _apiClients2.default.GeneralSettingClient,
    ProLocalSettingClient = _apiClients2.default.ProLocalSettingClient,
    entriesClient = _apiClients2.default.entriesClient;
var resolvers = exports.resolvers = {
	getForm: function getForm(formId) {
		return formsAdminApiClient.getForm(formId);
	},
	getForms: function getForms() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
		return formsAdminApiClient.getForms(page);
	},
	getFormPreview: function getFormPreview(formId) {
		return formsAdminApiClient.getFormPreview(formId);
	},
	getFormPrivacySettings: function getFormPrivacySettings(formId) {
		return PrivacySettingsClient.getSettings(formId);
	},
	getStyleIncludes: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			var settings;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return GeneralSettingClient.getSettings();

						case 2:
							settings = _context.sent;
							return _context.abrupt('return', settings.styleIncludes);

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		function getStyleIncludes() {
			return _ref.apply(this, arguments);
		}

		return getStyleIncludes;
	}(),
	getOtherSettings: function getOtherSettings() {
		return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
			var settings;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return GeneralSettingClient.getSettings();

						case 2:
							settings = _context2.sent;
							return _context2.abrupt('return', settings.otherSettings);

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));
	},
	getCfProFormSetting: function getCfProFormSetting() {
		return {};
	},

	getCfProSettings: function getCfProSettings() {
		return ProLocalSettingClient.getSettings();
	},
	getPageOfEntries: function getPageOfEntries() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
		return ProLocalSettingClient.getEntries(page);
	}

};