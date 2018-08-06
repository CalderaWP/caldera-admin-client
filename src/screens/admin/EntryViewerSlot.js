import React from 'react';
import Toolbar from './Toolbar';
import FormAdminView from './FormAdminView';
import AdminSlot from "./AdminSlot";
import types from "../../types";
import PropTypes from 'prop-types';
import {FormEntryViewer} from "../../components/EntryViewer/FormEntryViewer";


export default class EntryViewerSlot extends AdminSlot {

	render() {
		const {form,entries} = this.props;

		return (
			<div>
				<Toolbar.NavBar
					label="Entry Viewer"
					onActive={this.handleActive}
					onDeactive={this.handleDeactive}
					isActive={this.state.active}
				/>
				{this.state.active &&
				<div>

					<FormAdminView.Content>
						<FormEntryViewer
							form={form}
							entries={entries}
						/>
					</FormAdminView.Content>

				</div>
				}
			</div>
		);
	}


}

/**
 * Prop tyeps for CreateFormSlot component
 * @type {{form: shim, entries: shim}}
 */
EntryViewerSlot.propTypes = {
	form: PropTypes.shape(types.formType),
	entries: PropTypes.shape(types.entriesType),
};

EntryViewerSlot.props = {
	form : {
		ID: '',
		name: ''
	},
	field_details: {
		order: {},
		entry_list: {}
	}
}
