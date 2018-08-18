'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@wordpress/components');

var _FormAdminToolbar = require('./screens/admin/FormAdminToolbar');

var _FormAdminToolbar2 = _interopRequireDefault(_FormAdminToolbar);

var _FormAdminMainView = require('./screens/admin/FormAdminMainView');

var _FormAdminMainView2 = _interopRequireDefault(_FormAdminMainView);

var _FormAdminHelpView = require('./screens/admin/FormAdminHelpView');

var _FormAdminHelpView2 = _interopRequireDefault(_FormAdminHelpView);

var _CreateFormSlot = require('./screens/admin/CreateFormSlot');

var _CreateFormSlot2 = _interopRequireDefault(_CreateFormSlot);

var _FormsSlot = require('./screens/admin/FormsSlot');

var _FormsSlot2 = _interopRequireDefault(_FormsSlot);

var _SettingsSlot = require('./screens/admin/SettingsSlot');

var _SettingsSlot2 = _interopRequireDefault(_SettingsSlot);

var _EntryViewerSlot = require('./screens/admin/EntryViewerSlot');

var _EntryViewerSlot2 = _interopRequireDefault(_EntryViewerSlot);

var _types = require('./types');

var _proSettingsType = require('./components/Settings/ProSettings/proSettingsType');

var _statusType = require('./components/Layout/statusType');

var _statusType2 = _interopRequireDefault(_statusType);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _state = require('@caldera-labs/state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The main container for Caldera Forms admin
 */
var CalderaAdmin = function (_Component) {
	_inherits(CalderaAdmin, _Component);

	function CalderaAdmin(props) {
		_classCallCheck(this, CalderaAdmin);

		var _this = _possibleConstructorReturn(this, (CalderaAdmin.__proto__ || Object.getPrototypeOf(CalderaAdmin)).call(this, props));

		_this.state = {
			entryViewerForm: {}
		};
		_this.onFormUpdate = _this.onFormUpdate.bind(_this);
		_this.onCreateForm = _this.onCreateForm.bind(_this);
		_this.isProConnected = _this.isProConnected.bind(_this);
		_this.onOpenEntryViewerForForm = _this.onOpenEntryViewerForForm.bind(_this);
		_this.showEntryViewer = _this.showEntryViewer.bind(_this);
		return _this;
	}

	/**
  * Dispatch form update to parent
  * @param form
  */


	_createClass(CalderaAdmin, [{
		key: 'onFormUpdate',
		value: function onFormUpdate(form) {
			this.props.onFormUpdate(form);
		}

		/**
   * When entry viewer is opened
   *
   * @param {String} formId
   */

	}, {
		key: 'onOpenEntryViewerForForm',
		value: function onOpenEntryViewerForForm(formId) {
			this.setState({
				entryViewerForm: this.props.forms[formId]
			});
		}

		/**
   *
   * @param {String} newForm
   */

	}, {
		key: 'onCreateForm',
		value: function onCreateForm(newForm) {
			this.props.createFrom(newForm);
		}

		/**
   * Check if Caldera FormsSlot Pro is connected or not
   * @return {*|boolean}
   */

	}, {
		key: 'isProConnected',
		value: function isProConnected() {
			return this.props.settings[_proSettingsType.PRO_SETTINGS][_proSettingsType.PRO_CONNECTED];
		}

		/**
   * Check if entry viewe should show
   * @return {boolean}
   */

	}, {
		key: 'showEntryViewer',
		value: function showEntryViewer() {
			var entryViewerForm = this.state.entryViewerForm;

			return 0 !== Object.keys(entryViewerForm).length && entryViewerForm.hasOwnProperty('fields');
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    forms = _props.forms,
			    mainStatus = _props.mainStatus,
			    settings = _props.settings,
			    updateSettings = _props.updateSettings,
			    entries = _props.entries;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_components.SlotFillProvider,
					null,
					_react2.default.createElement(_FormAdminToolbar2.default, {
						isProConnected: this.isProConnected(),
						mainStatus: mainStatus
					}),
					_react2.default.createElement(_FormsSlot2.default, {
						forms: forms,
						onFormUpdate: this.onFormUpdate,
						openEntryViewerForForm: this.onOpenEntryViewerForForm
					}),
					_react2.default.createElement(_CreateFormSlot2.default, {
						forms: forms,
						onCreateForm: this.onCreateForm
					}),
					_react2.default.createElement(_SettingsSlot2.default, {
						forms: forms,
						settings: settings,
						updateSeqttings: updateSettings
					}),
					this.showEntryViewer() && _react2.default.createElement(_EntryViewerSlot2.default, {
						form: this.state.entryViewerForm,
						entries: entries
					}),
					_react2.default.createElement(_FormAdminMainView2.default, null),
					_react2.default.createElement(_FormAdminHelpView2.default, null)
				)
			);
		}
	}]);

	return CalderaAdmin;
}(_react.Component);

var formsType = _types.collectionTypes.formsType,
    entriesType = _types.collectionTypes.entriesType,
    settingsType = _types.collectionTypes.settingsType;
var actions = _state.store.actions,
    selectors = _state.store.selectors;

/**
 * Prop types for  CalderaAdmin component
 * @type {{forms: shim, entries: shim, settings, mainStatus, updateSettings: shim, updateForms: shim, createFrom: shim}}
 */

CalderaAdmin.propTypes = _extends({
	forms: formsType,
	entries: entriesType,
	settings: settingsType,
	mainStatus: _statusType2.default
});

Object.keys(actions).forEach(function (actionKey) {
	CalderaAdmin.propTypes[actionKey] = _propTypes2.default.func;
});
Object.keys(selectors).forEach(function (selectorKey) {
	CalderaAdmin.propTypes[selectorKey] = _propTypes2.default.func;
});

CalderaAdmin.defaultProps = {
	settings: _defineProperty({}, _proSettingsType.PRO_SETTINGS, _defineProperty({}, _proSettingsType.PRO_CONNECTED, false)),
	mainStatus: {
		message: '',
		show: false,
		success: false,
		updating: false
	}
};

exports.default = CalderaAdmin;