'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneralSettings = undefined;

var _settings;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _configFields = require('./configFields');

var _configFields2 = _interopRequireDefault(_configFields);

var _SettingsGroup2 = require('../SettingsGroup');

var _types = require('../../../types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Create the global form settings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
var GeneralSettings = exports.GeneralSettings = function (_SettingsGroup) {
  _inherits(GeneralSettings, _SettingsGroup);

  function GeneralSettings() {
    _classCallCheck(this, GeneralSettings);

    return _possibleConstructorReturn(this, (GeneralSettings.__proto__ || Object.getPrototypeOf(GeneralSettings)).apply(this, arguments));
  }

  return GeneralSettings;
}(_SettingsGroup2.SettingsGroup);

;

/**
 * Prop types for the GlobalForms settings component
 * @type {{}}
 */
GeneralSettings.propTypes = {
  configFields: _propTypes2.default.array,
  classNames: _propTypes2.default.string,
  settings: _types2.default.generalSettingsType,
  onSettingsChange: _propTypes2.default.func.isRequired
};
/**
 * Class names used in the GlobalForms settings component
 * @type {{wrapper: string}}
 */
GeneralSettings.classNames = {
  wrapper: 'caldera-forms-global-form-settings'
};

/**
 * Default props for the GlobalForms settings component
 * @type {{}}
 */
GeneralSettings.defaultProps = {
  configFields: _configFields2.default,
  settings: (_settings = {}, _defineProperty(_settings, _configFields.STYLE_FORM, true), _defineProperty(_settings, _configFields.STYLE_ALERT, true), _defineProperty(_settings, _configFields.STYLE_GRID, true), _defineProperty(_settings, _configFields.CDN_ENABLE, false), _settings)
};