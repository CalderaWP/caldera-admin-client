'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _element = require('@wordpress/element');

var _components = require('@wordpress/components');

var _components2 = require('@caldera-labs/components');

var _Status = require('../../components/Layout/Status');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _types = require('../../types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _createSlotFill = (0, _components.createSlotFill)('FormAdminToolbar'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var FormAdminToolbar = function (_Component) {
	_inherits(FormAdminToolbar, _Component);

	function FormAdminToolbar(props) {
		_classCallCheck(this, FormAdminToolbar);

		var _this = _possibleConstructorReturn(this, (FormAdminToolbar.__proto__ || Object.getPrototypeOf(FormAdminToolbar)).call(this, props));

		_this.state = { currentItem: null };
		_this.handleClick = _this.handleClick.bind(_this);
		_this.proStatusMessage = _this.proStatusMessage.bind(_this);
		return _this;
	}

	_createClass(FormAdminToolbar, [{
		key: 'handleClick',
		value: function handleClick(_ref) {
			var props = _ref.props;

			if (this.state.currentItem) {
				this.state.currentItem.onDeactive();
			}

			props.onActive();
			this.setState({ currentItem: props });
		}
	}, {
		key: 'proStatusMessage',
		value: function proStatusMessage() {
			return this.props.isProConnected ? 'Connected' : 'Not Connected';
		}
	}, {
		key: 'render',
		value: function render() {
			var mainStatus = this.props.mainStatus;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_components2.Admin.CalderaHeader,
					null,
					_react2.default.createElement(Slot, {
						name: 'FormAdminToolbar.NavBar',
						fillChildProps: { onClick: this.handleClick }
					}),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(_Status.Status, {
							className: FormAdminToolbar.classNames.mainStatus,
							message: mainStatus.message,
							success: mainStatus.success,
							show: mainStatus.show,
							updating: mainStatus.updating
						})
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(_Status.Status, {
							className: FormAdminToolbar.classNames.proStatus,
							message: this.proStatusMessage(),
							success: this.props.isProConnected,
							show: this.showProStatus
						})
					)
				)
			);
		}
	}]);

	return FormAdminToolbar;
}(_element.Component);

FormAdminToolbar.NavBar = function (_ref2) {
	var label = _ref2.label,
	    onActive = _ref2.onActive,
	    onDeactive = _ref2.onDeactive,
	    _ref2$isActive = _ref2.isActive,
	    isActive = _ref2$isActive === undefined ? false : _ref2$isActive;
	return _react2.default.createElement(
		Fill,
		{
			name: 'FormAdminToolbar.NavBar',
			label: label,
			onActive: onActive,
			onDeactive: onDeactive
		},
		_react2.default.createElement(
			'li',
			null,
			_react2.default.createElement(
				_components.Button,
				{
					isPrimary: true,
					onClick: function onClick() {
						if (isActive) {
							onDeactive();
						} else {
							onActive();
						}
					}
				},
				label
			)
		)
	);
};

exports.default = FormAdminToolbar;


FormAdminToolbar.propTypes = {
	isProConnected: _propTypes2.default.bool,
	showProStatus: _propTypes2.default.bool,
	mainStatus: _types2.default.statusType
};

FormAdminToolbar.defaultProps = {
	isProConnected: false,
	showProStatus: true
};

FormAdminToolbar.classNames = {
	proStatus: 'cf-pro-status',
	mainStatus: 'cf-status'
};