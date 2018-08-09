'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProWhatIs = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create the ProWhatIs UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
var ProWhatIs = exports.ProWhatIs = function ProWhatIs(props) {
	return _react2.default.createElement(
		'div',
		{
			className: (0, _classnames2.default)(props.className, ProWhatIs.classNames.wrapper)
		},
		_react2.default.createElement(
			'p',
			null,
			'Caldera Forms Pro is an app + plugin that makes forms easy.'
		),
		_react2.default.createElement(
			'h3',
			null,
			'Benefits'
		),
		_react2.default.createElement(
			'ul',
			null,
			_react2.default.createElement(
				'li',
				null,
				'Enhanced Email Delivery'
			),
			_react2.default.createElement(
				'li',
				null,
				'Form To PDF'
			),
			_react2.default.createElement(
				'li',
				null,
				'Priority Support'
			),
			_react2.default.createElement(
				'li',
				null,
				'Add-ons Included in Yearly Plans'
			)
		)
	);
};

/**
 * Prop types for the ProWhatIs component
 * @type {{}}
 */
ProWhatIs.propTypes = {
	classNames: _propTypes2.default.string
};

/**
 * Class names used in the ProWhatIs component
 * @type {{wrapper: string}}
 */
ProWhatIs.classNames = {
	wrapper: 'caldera-forms-pro-what-is'
};