'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = getFormRows;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EntryRowActions = require('./EntryRowActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the form entry rows for <EntryViewer>
 * @return {*}
 */
function getFormRows(entries, onEntryAction) {
	var entryListOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	var includeEntryActions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;


	var rows = [];
	Object.keys(entries).forEach(function (id) {
		var entry = entries[id];
		var thisRow = {
			id: entry.id,
			datestamp: entry.datestamp,
			user: 'object' === _typeof(entry.user) ? entry.user : {}
		};

		if (!entryListOnly) {
			Object.values(entry.fields).forEach(function (entryField) {
				thisRow[entryField.field_id] = entryField.value;
			});
		}

		if (includeEntryActions) {
			thisRow.entryActions = _react2.default.createElement(_EntryRowActions.EntryRowActions, {
				onView: function onView() {
					onEntryAction('viewForm', id);
				}
			});
		}

		rows.push(thisRow);
	});
	return rows;
}