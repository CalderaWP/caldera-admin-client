'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProFreeTrial = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _components = require('@wordpress/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create the ProFreeTrial UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
var ProFreeTrial = exports.ProFreeTrial = function ProFreeTrial(props) {
	var documentationHref = 'https://calderaforms.com/doc/caldera-forms-pro-getting-started/?utm_source=wp-admin&utm_campaign=pro-screen&utm_term=not-connected';
	var trialHref = 'https://calderaforms.com/checkout?edd_action=add_to_cart&download_id=64101&edd_options[price_id]=1?utm_source=wp-admin&utm_campaign=pro-screen&utm_term=not-connected';
	return _react2.default.createElement(
		'div',
		{
			className: (0, _classnames2.default)(props.className, ProFreeTrial.classNames.wrapper)
		},
		_react2.default.createElement(
			'p',
			null,
			'Ready to try Caldera Forms Pro? Plans start at just 14.99/ month with a 7 day free trial.'
		),
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				_components.Button,
				{
					href: documentationHref,
					isLink: true,
					isLarge: true,
					className: 'button'
				},
				'Documentation'
			),
			_react2.default.createElement(
				_components.Button,
				{
					href: trialHref,
					isLink: true,
					isLarge: true,
					className: 'button'
				},
				'Start Free Trial'
			)
		)
	);
};

/**
 * Prop types for the ProFreeTrial component
 * @type {{}}
 */
ProFreeTrial.propTypes = {
	classNames: _propTypes2.default.string
};

/**
 * Class names used in ProFreeTrial component
 * @type {{wrapper: string}}
 */
ProFreeTrial.classNames = {
	wrapper: 'caldera-forms-pro-free-trial'
};