import React from "react";
import PropTypes from 'prop-types';
import {EntryViewer} from "./EntryViewer";


export class FormEntryViewer extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			entries: {
				"32": {
					"id": "32",
					"form_id": "CF5b412c2eafc90",
					"datestamp": "2018-07-07 21:12:25",
					"status": "active",
					"user": {
						"id": "1",
						"name": "admin",
						"email": "1@nom.com"
					},
					"fields": {
						"fld_8768091": {
							"id": "99",
							"entry_id": "32",
							"field_id": "fld_8768091",
							"slug": "first_name",
							"value": "Mike"
						},
						"fld_9970286": {
							"id": "100",
							"entry_id": "32",
							"field_id": "fld_9970286",
							"slug": "last_name",
							"value": "Corkum"
						},
						"fld_6009157": {
							"id": "101",
							"entry_id": "32",
							"field_id": "fld_6009157",
							"slug": "email_address",
							"value": "mike@hiroy.club"
						},
						"fld_7683514": {
							"id": "102",
							"entry_id": "32",
							"field_id": "fld_7683514",
							"slug": "comments_questions",
							"value": "Hi Mike\r\n\r\nLine 2\r\n\r\nLine 11"
						}
					},
					"meta": []
				},
				"31": {
					"id": "31",
					"form_id": "CF5b412c2eafc90",
					"datestamp": "2018-07-07 21:12:03",
					"status": "active",
					"user": {
						"id": "1",
						"name": "admin",
						"email": "1@nom.com"
					},
					"fields": {
						"fld_8768091": {
							"id": "94",
							"entry_id": "31",
							"field_id": "fld_8768091",
							"slug": "first_name",
							"value": "Roy"
						},
						"fld_9970286": {
							"id": "95",
							"entry_id": "31",
							"field_id": "fld_9970286",
							"slug": "last_name",
							"value": "Sivan"
						},
						"fld_6009157": {
							"id": "96",
							"entry_id": "31",
							"field_id": "fld_6009157",
							"slug": "email_address",
							"value": "roy@hiroy.club"
						},
						"fld_7683514": {
							"id": "97",
							"entry_id": "31",
							"field_id": "fld_7683514",
							"slug": "comments_questions",
							"value": "Hi Roy\r\n\r\nLine 2\r\n\r\nLine 3"
						}
					},
					"meta": []
				}
			}
		};
		this.getColumns = this.getColumns.bind(this);
		this.getRows = this.getRows.bind(this);
	}

	getColumns() {
		const {order, entry_list} = this.props.form.field_details;
		return Object.values(entry_list);
	}

	getRows() {
		const {entries} = this.state;
		let rows = [];
		const row = (fieldId, value) => {
			return {
				id: fieldId,
				value: value
			}
		};
		Object.keys(entries).forEach(id => {
			let thisRow = [
				row('id', id),
				row('datestamp', entries[id].datestamp)
			];
			Object.values(entries[id].fields).forEach(entryField => {
				thisRow.push(row(entryField.field_id, entryField.value))
			});
			rows.push(thisRow);

		});
		return rows;
	}

	render() {
		return (
			<div>
				<EntryViewer
					columns={this.getColumns()}
					rows={this.getRows()}
				/>
			</div>

		)
	}


};

FormEntryViewer.propTypes = {
	form: PropTypes.object.isRequired,
	getEntries: PropTypes.func
}


