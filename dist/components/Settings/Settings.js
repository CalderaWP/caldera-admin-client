'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Settings = undefined;

var _settings;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _components = require('@wordpress/components');

var _ProSettings = require('./ProSettings/ProSettings');

var _GeneralSettings = require('./GeneralSettings/GeneralSettings');

var _types = require('../../types');

var _generalSettingsType = require('./GeneralSettings/generalSettingsType');

var _proSettingsType = require('./ProSettings/proSettingsType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Creates the UI for Caldera FormsSlot global settings
 */
var Settings = exports.Settings = function (_React$PureComponent) {
	_inherits(Settings, _React$PureComponent);

	/**
  * Create Settings componet
  * @param props
  */
	function Settings(props) {
		_classCallCheck(this, Settings);

		var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

		_this.onSelect = _this.onSelect.bind(_this);
		_this.onSettingsSave = _this.onSettingsSave.bind(_this);
		return _this;
	}

	/**
  * Dispatch current tabName when tabs change
  * @param tabName
  */


	_createClass(Settings, [{
		key: 'onSelect',
		value: function onSelect(tabName) {
			this.props.onTabSelect(tabName);
		}
	}, {
		key: 'onSettingsSave',


		/**
   * Dispatches settings to parent on save
   * @param update
   */
		value: function onSettingsSave(update) {
			this.props.updateSettings(update);
		}
	}, {
		key: 'render',


		/**
   * Creat main Caldera FormsSlot settings UI
   * @return {*}
   */
		value: function render() {
			var _this2 = this;

			var settings = this.props.settings;

			return _react2.default.createElement(
				_components.TabPanel,
				{
					orientation: 'horizontal',
					className: (0, _classnames2.default)(Settings.classNames.wrapper, this.props.classNames),
					activeClass: (0, _classnames2.default)(Settings.classNames.active),
					onSelect: this.onSelect,
					tabs: [{
						name: 'proSettings',
						title: 'Caldera Forms Pro',
						className: 'pro-settings'
					}, {
						name: 'privacySettings',
						title: 'Privacy Settings',
						className: 'privacy-settings'
					}, {
						name: 'generalSettings',
						title: 'Global Form Settings',
						className: 'global-form-settings'
					}]
				},
				function (tabName) {
					switch (tabName) {
						case 'generalSettings':
							return _react2.default.createElement(_GeneralSettings.GeneralSettings, {
								settings: settings[_generalSettingsType.GENERAL_SETTINGS],
								onSettingsChange: function onSettingsChange(generalSettings) {
									var _this2$onSettingsSave;

									_this2.onSettingsSave((_this2$onSettingsSave = {}, _defineProperty(_this2$onSettingsSave, _generalSettingsType.GENERAL_SETTINGS, generalSettings), _defineProperty(_this2$onSettingsSave, _proSettingsType.PRO_SETTINGS, settings[_proSettingsType.PRO_SETTINGS]), _this2$onSettingsSave));
								}
							});
						case 'proSettings':
						default:
							return _react2.default.createElement(_ProSettings.ProSettings, {
								settings: settings[_proSettingsType.PRO_SETTINGS],
								onSettingsSave: function onSettingsSave(proSettings) {
									var _this2$onSettingsSave2;

									_this2.onSettingsSave((_this2$onSettingsSave2 = {}, _defineProperty(_this2$onSettingsSave2, _generalSettingsType.GENERAL_SETTINGS, settings[_generalSettingsType.GENERAL_SETTINGS]), _defineProperty(_this2$onSettingsSave2, _proSettingsType.PRO_SETTINGS, proSettings), _this2$onSettingsSave2));
								}
							});
					}
				}
			);
		}
	}]);

	return Settings;
}(_react2.default.PureComponent);

;

/**
 * Prop definitions for Settings component
 *
 * @type {{classNames: shim, onTabSelect: *, proSettings: shim, generalSettings: shim, onSettingsSave: shim}}
 */
Settings.propTypes = {
	classNames: _propTypes2.default.string,
	onTabSelect: _propTypes2.default.func.isRequired,
	settings: _types.collectionTypes.settingsType,
	updateSettings: _propTypes2.default.func
};

/**
 * Default props for the Settings component
 * @type {{}}
 */
Settings.defaultProps = {
	settings: (_settings = {}, _defineProperty(_settings, _generalSettingsType.GENERAL_SETTINGS, {}), _defineProperty(_settings, _proSettingsType.PRO_SETTINGS, _defineProperty({}, _proSettingsType.PRO_CONNECTED, false)), _settings)

	/**
  * Class names used in the Settings component
  * @type {{wrapper: string}}
  */
};Settings.classNames = {
	wrapper: 'caldera-forms-global-settings',
	active: 'caldera-forms-settings-tab-active'
};