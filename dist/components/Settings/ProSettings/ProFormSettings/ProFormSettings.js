'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProFormSettings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SettingsGroup2 = require('../../SettingsGroup');

var _configFields = require('./configFields');

var _configFields2 = _interopRequireDefault(_configFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Create the ProFormSettings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
var ProFormSettings = exports.ProFormSettings = function (_SettingsGroup) {
	_inherits(ProFormSettings, _SettingsGroup);

	function ProFormSettings() {
		_classCallCheck(this, ProFormSettings);

		return _possibleConstructorReturn(this, (ProFormSettings.__proto__ || Object.getPrototypeOf(ProFormSettings)).apply(this, arguments));
	}

	_createClass(ProFormSettings, [{
		key: 'getConfigFields',


		/**
   * Get config fields
   *
   * Adds pro layouts as options when possible
   * @return {Array}
   */
		value: function getConfigFields() {
			var _this2 = this;

			var configFields = _get(ProFormSettings.prototype.__proto__ || Object.getPrototypeOf(ProFormSettings.prototype), 'getConfigFields', this).call(this);
			if (this.props.layouts.length) {
				configFields.forEach(function (configField) {
					if ([_configFields.PRO_FORM_EMAIL_LAYOUT, _configFields.PRO_FORM_PDF_LAYOUT].includes(configField.id)) {
						configField.options = _this2.props.layouts;
					}
				});
			}
			return configFields;
		}
	}]);

	return ProFormSettings;
}(_SettingsGroup2.SettingsGroup);

;

/**
 * Prop types for the ProFormSettings component
 * @type {{}}
 */
ProFormSettings.propTypes = {
	classNames: _propTypes2.default.string,
	layouts: _propTypes2.default.array
};

/**
 * Default props for the ProFormSettings component
 * @type {{}}
 */
ProFormSettings.defaultProps = {
	configFields: _configFields2.default,
	wrapperClass: 'caldera-forms-pro-form-settings',
	layouts: []
};