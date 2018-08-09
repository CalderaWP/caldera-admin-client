'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RemotePost = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('./propTypes');

var _reactOembedContainer = require('react-oembed-container');

var _reactOembedContainer2 = _interopRequireDefault(_reactOembedContainer);

var _propTypes2 = require('prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The main container component for the RemotePost
 *
 * @param {Object} props
 * @return {*}
 * @constructor
 */
var RemotePost = exports.RemotePost = function RemotePost(props) {
	var post = props.post;

	return _react2.default.createElement(
		_reactOembedContainer2.default,
		{
			markup: post.content.rendered,
			className: props.className

		},
		_react2.default.createElement(
			'article',
			{
				id: 'post-' + post.id
			},
			_react2.default.createElement(
				'h2',
				null,
				post.title.rendered
			),
			_react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: post.content.rendered } })
		)
	);
};

RemotePost.propTypes = _extends({}, _propTypes.postPropTypes, {
	className: _propTypes3.default.string

});