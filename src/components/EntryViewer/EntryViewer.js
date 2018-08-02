import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PropTypes from 'prop-types';
import {prepareColumnData, prepareRowData} from "./util";
import {Button} from "@wordpress/components"

export class EntryViewer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageSize: this.props.defaultPageSize,
			page:1,
			data: [],
			pages: 2,
			loading: true
		};

		this.prepareData = this.prepareData.bind(this);
		this.prepareColumns = this.prepareColumns.bind(this);
		this.minRows = this.minRows.bind(this);
		this.onNext = this.onNext.bind(this);
		this.onPrevious = this.onPrevious.bind(this);
	}


	prepareData() {
		const {rows, dateFormat} = this.props;
		const columns = this.prepareColumns();
		let prepared = [];
		rows.forEach(row => {
			prepared.push(prepareRowData(row, columns, dateFormat));
		});
		return prepared;
	}

	prepareColumns() {
		let {columns} = this.props;
		let prepared = [];

		columns.forEach(column => {
			prepared.push(prepareColumnData(column));
		});

		return prepared;
	}

	minRows() {
		const totalRows = this.prepareData().length;
		return totalRows > this.props.defaultPageSize
			? this.props.defaultPageSize
			: totalRows;
	}

	onPrevious() {
		let page = this.state.page - 1;
		this.setState({page})
	}

	onNext() {
		let page = this.state.page + 1;
		this.setState({page})
	}


	render() {
		return (
			<div>
				<ReactTable
					columns={this.prepareColumns()}
					page={this.state.page}
					pageSize={this.state.pageSize}
					PreviousComponent={(props) => {
						return (
							<Button
								disabled={props.disabled}
								onClick={this.onPrevious}
							>
								{props.children}
							</Button>
						)
					}}
					NextComponent={(props) => {
						return (
							<Button
								disabled={props.disabled}
								onClick={this.onNext}
							>
								{props.children}
							</Button>
						)
					}}
					sortable={false}
					multiSort={false}
					resizable={false}
					filterable={false}
					manual
					minRows={this.minRows()}
				/>


			</div>
		);
	}
}

EntryViewer.propTypes = {
	columns: PropTypes.array,
	rows: PropTypes.array,
	className: PropTypes.string,
	data: PropTypes.array,
	totalPages: PropTypes.number,
	onPageNav: PropTypes.func,
	onDelete: PropTypes.func,
	onExport: PropTypes.func,
	onChangeEntryStatus: PropTypes.func,
	dateFormat: PropTypes.string,
	defaultPageSize: PropTypes.number,
};

EntryViewer.defaultProps = {
	dateFormat: 'MMMM Do YYYY, h:mm:ss a',
	defaultPageSize: 1
};