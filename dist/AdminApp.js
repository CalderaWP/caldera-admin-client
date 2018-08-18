'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = AdminApp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _CalderaAdminWithState = require('./CalderaAdminWithState');

var _reactRedux = require('react-redux');

var _apiClients = require('./apiClients');

var _apiClients2 = _interopRequireDefault(_apiClients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A factory for a Caldera (Forms) Admin app
 * @constructor
 */
function AdminApp() {
	/**
  * Get the current Redux(-like) store
  */
	this.getStore = function () {
		return _store2.default;
	};

	/**
  * Get the API clients
  * @return {{cfAdmin, formsAdminApiClient, entriesClient, proSettingsClient, privacySettingsClient, generalSettingsClient}}
  */
	this.getApiClients = function () {
		return _apiClients2.default;
	};

	/**
  * Render admin app to dom
  * @param {String} element ID attribute of element to mount app on
  */
	this.renderToDom = function (element) {
		_reactDom2.default.render(this.component(), document.getElementById(element));
	};

	/**
  * Get the component wrapped in state
  * @return {*}
  */
	this.component = function () {
		return _react2.default.createElement(
			_reactRedux.Provider,
			{ store: _store2.default },
			_react2.default.createElement(_CalderaAdminWithState.CalderaAdminWithState, null)
		);
	};
};