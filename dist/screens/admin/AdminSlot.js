'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminSlot = function (_React$Component) {
	_inherits(AdminSlot, _React$Component);

	function AdminSlot(props) {
		_classCallCheck(this, AdminSlot);

		var _this = _possibleConstructorReturn(this, (AdminSlot.__proto__ || Object.getPrototypeOf(AdminSlot)).call(this, props));

		_this.state = { active: false };
		_this.handleActive = _this.handleActive.bind(_this);
		_this.handleDeactive = _this.handleDeactive.bind(_this);
		return _this;
	}

	_createClass(AdminSlot, [{
		key: 'handleActive',
		value: function handleActive() {
			this.setState({ active: true });
		}
	}, {
		key: 'handleDeactive',
		value: function handleDeactive() {
			this.setState({ active: false });
		}
	}]);

	return AdminSlot;
}(_react2.default.Component);

exports.default = AdminSlot;
;