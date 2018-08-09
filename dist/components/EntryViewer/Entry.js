'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Entry = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _entryType = require('./entryType');

var _entryType2 = _interopRequireDefault(_entryType);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Entry = exports.Entry = function Entry(props) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			{
				className: 'baldrick-modal-title',
				style: {
					display: 'block'
				} },
			_react2.default.createElement(
				'a',
				{
					//@todo make this an icon
					className: 'baldrick-modal-closer'
				},
				'\xD7'
			),
			_react2.default.createElement(
				'h3',
				{
					className: 'modal-label'
				},
				'Entry ',
				props.id
			)
		),
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'caldera-forms-entry-left' },
				_react2.default.createElement(
					'div',
					{
						className: (0, _classnames2.default)({
							'user-avatar': props.user.ID && 0 < props.user.ID
						}, 'user-avatar-' + props.user.ID),
						title: props.user.name,
						style: {
							marginTop: '-1px'
						}
					},
					_react2.default.createElement('img', {
						alt: 'User Avatar for ' + props.user.name,
						src: props.user.avatar
					})
				)
			),
			_react2.default.createElement(
				'div',
				{
					className: (0, _classnames2.default)('caldera-forms-entry-right', 'tab-detail-panel hidden')
				},
				_react2.default.createElement(
					'ul',
					null,
					props.fields.map(function (field) {
						return _react2.default.createElement(
							'li',
							{ className: 'entry-detail' },
							_react2.default.createElement(
								'span',
								{ className: 'entry-label' },
								field.label
							),
							_react2.default.createElement(
								'div',
								{ className: 'entry-content' },
								field.value
							)
						);
					})
				)
			)
		)
	);
};

Entry.propTypes = _entryType2.default;