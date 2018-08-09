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

var _FormAdminHelpView = require('./FormAdminHelpView');

var _FormAdminHelpView2 = _interopRequireDefault(_FormAdminHelpView);

var _AdminSlot2 = require('./AdminSlot');

var _AdminSlot3 = _interopRequireDefault(_AdminSlot2);

var _FormList = require('../../components/FormsList/FormList');

var _components = require('@wordpress/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsSlot = function (_AdminSlot) {
	_inherits(FormsSlot, _AdminSlot);

	function FormsSlot() {
		_classCallCheck(this, FormsSlot);

		return _possibleConstructorReturn(this, (FormsSlot.__proto__ || Object.getPrototypeOf(FormsSlot)).apply(this, arguments));
	}

	_createClass(FormsSlot, [{
		key: 'getContent',
		value: function getContent(forms) {
			if (0 !== Object.keys(forms).length) {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_FormList.FormList, {
						forms: forms,
						onFormUpdate: this.props.onFormUpdate,
						openEntryViewerForForm: this.props.openEntryViewerForForm
					})
				);
			}
			return _react2.default.createElement(
				_components.Notice,
				{
					status: 'error',
					isDismissible: true
				},
				'No Forms Found'
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var forms = this.props.forms;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_FormAdminToolbar2.default.NavBar, {
					label: 'Forms',
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
						this.getContent(forms)
					),
					_react2.default.createElement(
						_FormAdminHelpView2.default.Content,
						null,
						'Help Content From Forms component'
					)
				)
			);
		}
	}]);

	return FormsSlot;
}(_AdminSlot3.default);

exports.default = FormsSlot;


FormsSlot.propTypes = _FormList.FormList.propTypes;
FormsSlot.defaultProps = {
	forms: {},
	entries: {}
};