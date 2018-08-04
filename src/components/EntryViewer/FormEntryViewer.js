import React from "react";
import PropTypes from 'prop-types';
import {EntryViewer} from "./EntryViewer";
import {EntryRowActions} from "./EntryRowActions";
import {Entry} from "./Entry";
import {getFormColumns} from "./getFormColumns";
import getFormRows from "./getFormRows";

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
		};
		this.setCurrentEntry = this.setCurrentEntry.bind(this);
		this.onEntryAction = this.onEntryAction.bind(this);
	}

	/**
	 * Set ID of current entry
	 *
	 * @param {Number} currentEntry
	 */
	setCurrentEntry(currentEntry){
		this.setState({currentEntry})
	}

	onEntryAction(eventType, id ){
		switch( eventType ){
			case 'view':
				this.setCurrentEntry(id);
				break;
		}
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
						columns={getFormColumns(
							this.props.form,
							0 > this.state.currentEntry,
							true
						)}
						rows={getFormRows(
							this.props.entries,


						)}
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
	getEntries: PropTypes.func,
	entries: PropTypes.array
};


