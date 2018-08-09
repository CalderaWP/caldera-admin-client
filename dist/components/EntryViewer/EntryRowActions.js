'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EntryRowActions = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = require('@wordpress/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntryRowActions = exports.EntryRowActions = function EntryRowActions(props) {

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			_components.Button,
			{
				className: EntryRowActions.classNames.view,
				isDefault: true,
				isLarge: true,
				onClick: function onClick() {
					props.onEntryAction('view');
				}
			},
			'View'
		),
		_react2.default.createElement(
			_components.Button,
			{
				className: EntryRowActions.classNames.delete,
				isDefault: true,
				isLarge: true,
				onClick: function onClick() {
					props.onEntryAction('delete');
				}

			},
			'Delete'
		),
		_react2.default.createElement(
			_components.Button,
			{
				className: EntryRowActions.classNames.resend,
				isDefault: true,
				isLarge: true,
				onClick: function onClick() {
					props.onEntryAction('resend');
				}

			},
			'Resend'
		)
	);
};

EntryRowActions.propTypes = {
	onEntryAction: _propTypes2.default.func

};

EntryRowActions.classNames = {
	view: 'entry-view-action-view',
	delete: 'entry-view-action-delete',
	resend: 'entry-view-action-resend'
};