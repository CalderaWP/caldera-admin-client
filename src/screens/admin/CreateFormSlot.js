import React from 'react';
import Toolbar from './Toolbar';
import Viewer from './Viewer';
import AdminSlot from "./AdminSlot";
import {NewForm} from "../../components/NewForm/NewForm";
import {collectionTypes} from "../../types";
import PropTypes from 'prop-types';
import {FormEntryViewer} from "../../components/EntryViewer/FormEntryViewer";

export default class CreateFormSlot extends AdminSlot {

	render() {
		const {forms,onCreateForm} = this.props;
		return (
			<div>
				<Toolbar.NavBar
					label="New Form"
					onActive={this.handleActive}
					onDeactive={this.handleDeactive}
					isActive={this.state.active}
				/>
				{this.state.active &&
				<div>

					<Viewer.Content>
						<NewForm
							onCreate={onCreateForm}
							forms={forms}
						/>
					</Viewer.Content>

				</div>
				}
			</div>
		);
	}


}


CreateFormSlot.propTypes = {
	forms: collectionTypes.formsType,
	onCreateForm: PropTypes.func.isRequired
};
CreateFormSlot.defaultProps = {
	forms: {},
};