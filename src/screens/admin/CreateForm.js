import React from 'react';
import Toolbar from './Toolbar';
import Viewer from './Viewer';
import AdminSlot from "./AdminSlot";
import {NewForm} from "../../components/NewForm/NewForm";
import {collectionTypes} from "../../types";
import PropTypes from 'prop-types';

export default class CreateForm extends AdminSlot {

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
						<NewForm onCreate={onCreateForm}/>
					</Viewer.Content>

				</div>
				}
			</div>
		);
	}


}


CreateForm.propTypes = {
	forms: collectionTypes.formsType,
	onCreateForm: PropTypes.func.isRequired
};
CreateForm.defaultProps = {
	forms: {},
};