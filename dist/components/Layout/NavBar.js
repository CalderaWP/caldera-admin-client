'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NavBar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _components = require('@wordpress/components');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = exports.NavBar = function NavBar(props) {

	return _react2.default.createElement(
		'div',
		{
			className: (0, _classnames2.default)(NavBar.classNames)
		},
		_react2.default.createElement(
			_components.NavigableMenu,
			{ onNavigate: props.onNavigate },
			props.choices.map(function (item) {
				var isSelected = props.value === item.value;
				var icon = isSelected ? 'yes' : item.hasOwnProperty('icon') ? item.icon : false;
				return _react2.default.createElement(
					_components.MenuItem,
					{
						className: (0, _classnames2.default)(NavBar.classNames.navItem, item.classNames, {
							active: isSelected
						}),
						key: item.value,
						icon: icon,
						isSelected: isSelected,
						shortcut: item.shortcut,
						onClick: function onClick() {
							if (!isSelected) {
								props.onNavigate(item.value);
							}
						}
					},
					item.label
				);
			})
		)
	);
};

NavBar.propTypes = {
	onNavigate: _propTypes2.default.func.isRequired,
	choices: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		value: _propTypes2.default.string.isRequired,
		label: _propTypes2.default.string.isRequired,
		shortcut: _propTypes2.default.string,
		classNames: _propTypes2.default.string
	})),
	value: _propTypes2.default.string
};

NavBar.defaultProps = [{
	value: 'forms',
	label: 'FormsSlot',
	icon: 'feedback'
}, {
	value: 'settings',
	label: 'Settings',
	icon: 'admin-settings'
}];

NavBar.classNames = {
	wrapper: ['caldera-editor-header', 'caldera-editor-subnav'],
	navItem: 'caldera-subnav',
	active: 'active'
};