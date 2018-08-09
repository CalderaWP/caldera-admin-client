'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProSettings = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _components = require('@wordpress/components');

var _configFields = require('./configFields');

var _configFields2 = _interopRequireDefault(_configFields);

var _components2 = require('@caldera-labs/components');

var _dotObject = require('dot-object');

var _factories = require('../factories');

var _ProWhatIs = require('./ProWhatIs/ProWhatIs');

var _ProFreeTrial = require('./ProFreeTrial/ProFreeTrial');

var _SettingsGroup2 = require('../SettingsGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Create the CF Pro settings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
var ProSettings = exports.ProSettings = function (_SettingsGroup) {
	_inherits(ProSettings, _SettingsGroup);

	/**
  * Create ProSettings component
  * @param props
  */
	function ProSettings(props) {
		var _this$state;

		_classCallCheck(this, ProSettings);

		var _this = _possibleConstructorReturn(this, (ProSettings.__proto__ || Object.getPrototypeOf(ProSettings)).call(this, props));

		_this.state = (_this$state = {}, _defineProperty(_this$state, props.settingsKey, (0, _factories.proLocalSettingsFactory)(props.proSettings)), _defineProperty(_this$state, 'currentTab', props.currentTab), _this$state);

		_this.getConfigFields = _this.getConfigFields.bind(_this);
		_this.tabContentAreaConnected = _this.tabContentAreaConnected.bind(_this);
		_this.tabContentAreaNotConnected = _this.tabContentAreaNotConnected.bind(_this);
		_this.onTabChange = _this.onTabChange.bind(_this);
		return _this;
	}

	/**
  * Prepare config fields, based on current tab
  *
  * @return {Array}
  */


	_createClass(ProSettings, [{
		key: 'getConfigFields',
		value: function getConfigFields() {
			var _this2 = this;

			var currentConfigFields = this.props.configFields[this.state.currentTab];
			currentConfigFields.forEach(function (configField) {
				var path = configField.path;

				configField.value = (0, _dotObject.pick)(path, _this2.state.proSettings);

				configField.onValueChange = function (newValue) {
					var update = _extends({}, _this2.state[_this2.props.settingsKey], _defineProperty({}, path, newValue));
					_this2.onSettingsChange((0, _dotObject.object)(update));
				};
			});
			return currentConfigFields;
		}
	}, {
		key: 'tabContentAreaConnected',


		/**
   * Renderer for tab content area used when CF Pro is connected
   * @param tabName
   * @return {*}
   */
		value: function tabContentAreaConnected(tabName) {
			return _react2.default.createElement(_components2.RenderGroup, {
				configFields: this.getConfigFields(tabName)
			});
		}

		/**
   * Renderer for tab content area used when CF Pro is NOT connected
   * @param tabName
   * @return {*}
   */

	}, {
		key: 'tabContentAreaNotConnected',
		value: function tabContentAreaNotConnected(tabName) {
			switch (tabName) {
				case 'apiKeys':
					return this.tabContentAreaConnected('apiKeys');
				case 'freeTrial':
					return _react2.default.createElement(_ProFreeTrial.ProFreeTrial, null);
				case 'whatIs':
				default:
					return _react2.default.createElement(_ProWhatIs.ProWhatIs, null);
			}
		}

		/**
   * Update internal state when current tab changes
   * @param {String} currentTab
   */

	}, {
		key: 'onTabChange',
		value: function onTabChange(currentTab) {
			this.setState({ currentTab: currentTab });
		}

		/**
   * Render the ProSettings UI
   * @return {*}
   */

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var connected = this.state.proSettings.connected;

			var tabs = [{
				name: 'apiKeys',
				title: 'Api Keys',
				className: 'pro-settings'
			}];
			if (connected) {
				tabs.push({
					name: 'generalSettings',
					title: 'Caldera FormsSlot Pro Settings',
					className: 'pro-settings'
				});
				tabs.push({
					name: 'formSettings',
					title: 'Form Settings',
					className: 'pro-form-settings'
				});
			} else {
				tabs.push({
					name: 'whatIs',
					title: 'What Is Caldera FormsSlot Pro ?',
					className: 'pro-what-is'
				});
				tabs.push({
					name: 'freeTrial',
					title: 'Free Trial',
					className: 'pro-free-tiral'
				});
			}

			return _react2.default.createElement(
				_components.TabPanel,
				{
					onSelect: this.onTabChange,
					className: (0, _classnames2.default)(this.props.className, ProSettings.classNames.wrapper),
					orientation: 'vertical',
					tabs: tabs
				},
				function (tabName) {
					if (connected) {
						return _this3.tabContentAreaConnected(tabName);
					}
					return _this3.tabContentAreaNotConnected(tabName);
				}
			);
		}
	}]);

	return ProSettings;
}(_SettingsGroup2.SettingsGroup);

;

/**
 * Prop types for the ProSettings component
 * @type {{}}
 */
ProSettings.propTypes = {
	classNames: _propTypes2.default.string,
	proSettings: _propTypes2.default.object,
	onSettingsSave: _propTypes2.default.func.isRequired,
	configFields: _propTypes2.default.object,
	settingsKey: _propTypes2.default.string.isRequired,
	currentTab: _propTypes2.default.string

};

/**
 * Default props for the ProSettings component
 * @type {{}}
 */
ProSettings.defaultProps = {
	configFields: _configFields2.default,
	settingsKey: 'proSettings',
	currentTab: 'apiKeys'
};

/**
 * Class names used in the ProSettings component
 * @type {{wrapper: string}}
 */
ProSettings.classNames = {
	wrapper: 'caldera-forms-pro-settings'
};