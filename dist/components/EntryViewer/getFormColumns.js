'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getFormColumns = getFormColumns;
/**
 * Get column headers for <EntryViewer>
 *
 * @return {({id: string, label: string}|{id: string, label: string})[]}
 */
function getFormColumns(form) {
	var entryListOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	var includeEntryActions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	var _form$field_details = form.field_details,
	    entry_list = _form$field_details.entry_list,
	    order = _form$field_details.order;

	var columns = Object.values(entry_list);
	if (!entryListOnly) {
		Object.values(order).forEach(function (orderedField) {
			columns.push(orderedField);
		});
	}

	if (includeEntryActions) {
		columns.push({
			name: "Actions",
			id: 'entryActions',
			key: 'entryActions'
		});
	}

	columns.forEach(function (column) {
		if (!column.hasOwnProperty('key')) {
			column.key = column.hasOwnProperty('id') ? column.id : JSON.stringify(Object.keys(column));
		}
	});

	return columns;
}