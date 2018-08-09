'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SettingsGroup = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dotObject = require('dot-object');

var _components = require('@caldera-labs/components');

var _components2 = require('@wordpress/components');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SettingsGroup = exports.SettingsGroup = function (_React$PureComponent) {
	_inherits(SettingsGroup, _React$PureComponent);

	function SettingsGroup(props) {
		_classCallCheck(this, SettingsGroup);

		var _this = _possibleConstructorReturn(this, (SettingsGroup.__proto__ || Object.getPrototypeOf(SettingsGroup)).call(this, props));

		_this.state = _defineProperty({}, props.settingsKey, props.settings);
		_this.onSettingsChange = _this.onSettingsChange.bind(_this);
		_this.getConfigFields = _this.getConfigFields.bind(_this);
		_this.onSettingsSave = _this.onSettingsSave.bind(_this);
		_this.wrapperClass = _this.wrapperClass.bind(_this);

		return _this;
	}

	/**
  * Save the settings
  */


	_createClass(SettingsGroup, [{
		key: 'onSettingsSave',
		value: function onSettingsSave() {
			this.props.onSettingsSave(this.state[this.props.settingsKey]);
		}

		/**
   * Update internal state when settings change
   *
   * @param {Object} update
   */

	}, {
		key: 'onSettingsChange',
		value: function onSettingsChange(update) {
			this.setState(_defineProperty({}, this.props.settingsKey, update));
		}

		/**
   * Prepare config fields
   *
   * @return {Array}
   */

	}, {
		key: 'getConfigFields',
		value: function getConfigFields() {
			var _this2 = this;

			var currentConfigFields = this.props.configFields;
			currentConfigFields.forEach(function (configField) {
				var path = configField.path;

				if (undefined !== path) {
					configField.value = (0, _dotObject.pick)(path, _this2.state);
					configField.onValueChange = function (newValue) {
						var update = _extends({}, _this2.state, _defineProperty({}, path, newValue));
						_this2.onSettingsChange((0, _dotObject.object)(update));
					};
				}
			});
			return currentConfigFields;
		}
	}, {
		key: 'wrapperClass',


		/**
   * Get the class for the outer element
   * @return {String}
   */
		value: function wrapperClass() {
			return this.props.wrapperClass;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{
					className: (0, _classnames2.default)(this.wrapperClass(), this.props.classNames)
				},
				_react2.default.createElement(_components.RenderGroup, {
					configFields: this.getConfigFields()
				}),
				_react2.default.createElement(
					_components2.Button,
					{
						onClick: this.props.onSettingsSave
					},
					this.props.saveButtonText
				)
			);
		}
	}]);

	return SettingsGroup;
}(_react2.default.PureComponent);

/**
 * Prop types for the SettingsGroup component
 * @type {{}}
 */


SettingsGroup.propTypes = {
	classNames: _propTypes2.default.string,
	settings: _propTypes2.default.object.isRequired,
	settingsKey: _propTypes2.default.string.isRequired,
	onSettingsSave: _propTypes2.default.func.isRequired,
	configFields: _propTypes2.default.array,
	saveButtonText: _propTypes2.default.string
};

SettingsGroup.defaultProps = {
	saveButtonText: 'Save'
};