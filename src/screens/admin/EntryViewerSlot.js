import React from 'react';
import Toolbar from './Toolbar';
import Viewer from './Viewer';
import AdminSlot from "./AdminSlot";
import {NewForm} from "../../components/NewForm/NewForm";
import types,{collectionTypes} from "../../types";
import PropTypes from 'prop-types';
import {FormEntryViewer} from "../../components/EntryViewer/FormEntryViewer";

export default class CreateFormSlot extends AdminSlot {

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

					<Viewer.Content>
						<FormEntryViewer
							form={form}
							entries={this.entries}
						/>
					</Viewer.Content>

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
CreateFormSlot.propTypes = {
	form: PropTypes.shape(types.formType),
	entries: PropTypes.shape(types.entriesType),
};

CreateFormSlot.props = {
	form : {
		ID: '',
		name: ''
	},
	field_details: {
		order: {},
		entry_list: {}
	}
}
