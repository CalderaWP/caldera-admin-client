'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormAdminToolbar = require('./FormAdminToolbar');

var _FormAdminToolbar2 = _interopRequireDefault(_FormAdminToolbar);

var _FormAdminMainView = require('./FormAdminMainView');

var _FormAdminMainView2 = _interopRequireDefault(_FormAdminMainView);

var _AdminSlot2 = require('./AdminSlot');

var _AdminSlot3 = _interopRequireDefault(_AdminSlot2);

var _types = require('../../types');

var _Settings = require('../../components/Settings/Settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Container for SettingsSlot UI in main admin screen
 */
var SettingsSlot = function (_AdminSlot) {
	_inherits(SettingsSlot, _AdminSlot);

	function SettingsSlot() {
		_classCallCheck(this, SettingsSlot);

		return _possibleConstructorReturn(this, (SettingsSlot.__proto__ || Object.getPrototypeOf(SettingsSlot)).apply(this, arguments));
	}

	_createClass(SettingsSlot, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    forms = _props.forms,
			    settings = _props.settings;


			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_FormAdminToolbar2.default.NavBar, {
					label: 'Settings',
					onActive: this.handleActive,
					onDeactive: this.handleDeactive,
					isActive: this.state.active
				}),
				this.state.active && _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_FormAdminMainView2.default.Content,
						null,
						_react2.default.createElement(_Settings.Settings, {
							onTabSelect: function onTabSelect() {},
							forms: forms,
							settings: settings
						})
					)
				)
			);
		}
	}]);

	return SettingsSlot;
}(_AdminSlot3.default);

exports.default = SettingsSlot;


SettingsSlot.propTypes = {
	forms: _types.collectionTypes.formsType,
	settings: _types.collectionTypes.settingsType
};
SettingsSlot.defaultProps = {
	forms: {},
	settings: {}
};