'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Status = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@wordpress/components');

var _components2 = require('@caldera-labs/components');

var _statusType = require('./statusType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Status = exports.Status = function Status(props) {
	if (props.updating) {
		return _react2.default.createElement(_components.Spinner, null);
	}
	return _react2.default.createElement(_components2.Admin.StatusIndicator, {
		message: props.message,
		show: props.show,
		success: props.success
	});
};

Status.propTypes = _statusType.statusShape;

Status.defaultProps = {
	show: false,
	success: true
};