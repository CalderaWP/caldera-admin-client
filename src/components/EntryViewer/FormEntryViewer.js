import React from "react";
import PropTypes from 'prop-types';
import {EntryViewer} from "./EntryViewer";
import {EntryRowActions} from "./EntryRowActions";
import {Entry} from "./Entry";

/**
 * Encapsulates the UI for viewing the saved entries of a form.
 */
export class FormEntryViewer extends React.PureComponent {

	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			currentEntry: 0,
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
		this.setCurrentEntry = this.setCurrentEntry.bind(this);
	}

	/**
	 * Set ID of current entry
	 *
	 * @param {Number} currentEntry
	 */
	setCurrentEntry(currentEntry){
		this.setState({currentEntry})
	}

	/**
	 * Get column headers for <EntryViewer>
	 *
	 * @return {({id: string, label: string}|{id: string, label: string})[]}
	 */
	getColumns() {
		const {entry_list,order} = this.props.form.field_details;
		let columns = Object.values(entry_list);
		if( 0 < this.state.currentEntry ){
			Object.values(order).forEach(orderedField => {
				columns.push(orderedField);
			});
		}
		columns.push({
			name: "Actions",
			id: 'entryActions',
			key: 'entryActions',
		});

		return columns;

	}

	/**
	 * Get the rows for <EntryViewer>
	 * @return {*}
	 */
	getRows() {
		const row = (fieldId, value) => {
			return {
				id: fieldId,
				value: value
			}
		};

		const addRowActionsColumn = (id,thisRow ) => {
			thisRow.entryActions = (
				<EntryRowActions
					onView={() => this.setCurrentEntry(id)}
				/>
			);
			return thisRow;
		};

		const createRows = () => {
			const {entries,currentEntry} = this.state;

			if( currentEntry ){
				const {order} = this.props.form.field_details;
				const entry = entries[currentEntry];
				let thisRow = [
					row('id', currentEntry),
					row('datestamp', entry.datestamp)
				];
				Object.keys(order).forEach(entryFieldId => {

				});

				thisRow = addRowActionsColumn(currentEntry,thisRow);
				return[ thisRow ];

			}else{

				let rows = [];

				Object.keys(entries).forEach(id => {
					const entry = entries[id];
					let thisRow = {
						id: entry.id,
						datestamp: entry.datestamp,
						user: 'object' === typeof entry.user ? entry.user : {},
						fields: {},
					};

					Object.values(entry.fields).forEach(entryField => {
						thisRow.fields[entryField.field_id] = entryField.value;
					});

					thisRow = addRowActionsColumn(entries[id].id,thisRow);

					rows.push(thisRow);

				});
				return rows;
			}
		}

		return createRows();



	}

	/**
	 * Render the FormEntryViewer
	 * @return {*}
	 */
	render() {
		const {currentEntry} = this.state;
		if( 0 <= currentEntry ){
			return (
				<div>
					<EntryViewer
						columns={this.getColumns()}
						rows={this.getRows()}
					/>
				</div>

			)
		}
		const entry = this.state.entries[currentEntry];
		return (
			<Entry
				fields={entry.fields}
				user={entry.user}
				id={entry.id}
			/>
		)

	}


};

/**
 * Default props for the <FormEntryViewer> component
 *
 * @type {{form: *, getEntries: shim}}
 */
FormEntryViewer.propTypes = {
	form: PropTypes.object.isRequired,
	getEntries: PropTypes.func
};


