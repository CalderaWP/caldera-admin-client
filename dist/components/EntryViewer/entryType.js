'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	fields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		label: _propTypes2.default.string.isRequired,
		slug: _propTypes2.default.string,
		value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.array]),
		id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
	})).isRequired,
	user: _propTypes2.default.shape({
		name: _propTypes2.default.string,
		avatar: _propTypes2.default.string,
		email: _propTypes2.default.string,
		ID: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
	}),
	id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};