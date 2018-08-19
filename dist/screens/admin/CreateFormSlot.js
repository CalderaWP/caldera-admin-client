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

var _NewForm = require('../../components/NewForm/NewForm');

var _types = require('../../types');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The slot for creating forms
 */
var CreateFormSlot = function (_AdminSlot) {
	_inherits(CreateFormSlot, _AdminSlot);

	function CreateFormSlot() {
		_classCallCheck(this, CreateFormSlot);

		return _possibleConstructorReturn(this, (CreateFormSlot.__proto__ || Object.getPrototypeOf(CreateFormSlot)).apply(this, arguments));
	}

	_createClass(CreateFormSlot, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    forms = _props.forms,
			    onCreateForm = _props.onCreateForm,
			    templates = _props.templates;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_FormAdminToolbar2.default.NavBar, {
					label: 'New Form',
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
						_react2.default.createElement(_NewForm.NewForm, {
							onCreate: onCreateForm,
							forms: forms,
							templates: templates
						})
					)
				)
			);
		}
	}]);

	return CreateFormSlot;
}(_AdminSlot3.default);

exports.default = CreateFormSlot;


CreateFormSlot.propTypes = {
	forms: _types.collectionTypes.formsType,
	onCreateForm: _propTypes2.default.func.isRequired,
	templates: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array])
};
CreateFormSlot.defaultProps = {
	forms: {}
};