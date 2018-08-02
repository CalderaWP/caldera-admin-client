import moment from 'moment'
function getValue(rowColumn) {
	return rowColumn.hasOwnProperty('value') ? rowColumn.value : null;
}

/**
 * Prepare one prepareRowData of data for entry viewer
 * @param {Array} row One prepareRowData of data
 * @param {Array} columns The valid getColumns
 * @return {Array}
 */
export const prepareRowData = (row, columns,dateFormat) => {
	let rowData = [];
	columns.forEach(column => {
		const {id} = column;
		const rowColumn = row.find(thisRow => thisRow.id === id);
		if (undefined !== typeof rowColumn) {
			let preparedRow = {
				id: rowColumn.id,
				value: getValue(rowColumn)
			};
			if( 'datestamp' === rowColumn.id ){
				preparedRow.value = moment(
					preparedRow.value,
				).format(dateFormat)
			}
			rowData.push(preparedRow);
		}
	});
	return rowData;
};

/**
 * Prepare one prepareColumnData of data
 * @param {Object} data Column data
 * @return {{Header: string, id: string}}
 */
export const prepareColumnData = (data) => {
	const {id} = data;
	let columnData = {
		...{
			Header: '',
			id: "",
			accessor: rowData => {

				const row = rowData.find(row => row.id === id);
				console.log(row);
				return 'object' === typeof row && row.hasOwnProperty( 'value')
					? row.value: 'Hi Roy';
			}
		},
		...data

	};

	if (data.hasOwnProperty('label')) {
		columnData.Header = data.label;
	}


	return columnData;
}