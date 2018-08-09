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

var _types2 = _interopRequireDefault(_types);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormEntryViewer = require('../../components/EntryViewer/FormEntryViewer');

var _FormAdminHelpView = require('./FormAdminHelpView');

var _FormAdminHelpView2 = _interopRequireDefault(_FormAdminHelpView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EntryViewerSlot = function (_AdminSlot) {
	_inherits(EntryViewerSlot, _AdminSlot);

	function EntryViewerSlot() {
		_classCallCheck(this, EntryViewerSlot);

		return _possibleConstructorReturn(this, (EntryViewerSlot.__proto__ || Object.getPrototypeOf(EntryViewerSlot)).apply(this, arguments));
	}

	_createClass(EntryViewerSlot, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    form = _props.form,
			    entries = _props.entries;


			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_FormAdminToolbar2.default.NavBar, {
					label: 'Entry Viewer',
					onActive: this.handleActive,
					onDeactive: this.handleDeactive,
					isActive: this.state.active
				}),
				this.state.active && _react2.default.createElement(
					_react2.default.Fragment,
					null,
					_react2.default.createElement(
						_FormAdminMainView2.default.Content,
						null,
						_react2.default.createElement(_FormEntryViewer.FormEntryViewer, {
							form: form,
							entries: entries
						})
					),
					_react2.default.createElement(
						_FormAdminHelpView2.default.Content,
						null,
						'Help Content'
					)
				)
			);
		}
	}]);

	return EntryViewerSlot;
}(_AdminSlot3.default);

/**
 * Prop tyeps for CreateFormSlot component
 * @type {{form: shim, entries: shim}}
 */


exports.default = EntryViewerSlot;
EntryViewerSlot.propTypes = {
	form: _propTypes2.default.shape(_types2.default.formType),
	entries: _propTypes2.default.shape(_types2.default.entriesType)
};

EntryViewerSlot.props = {
	form: {
		ID: '',
		name: ''
	},
	field_details: {
		order: {},
		entry_list: {}
	}
};