import React from 'react';
import Toolbar from './Toolbar';
import FormAdminView from './FormAdminView';
import AdminSlot from "./AdminSlot";
import {FormList} from "../../components/FormsList/FormList";
import {Notice} from '@wordpress/components'

export default class FormsSlot extends AdminSlot {

	getContent(forms) {
		if (0 !== Object.keys(forms).length) {
			return (
				<div>
					<FormList
						forms={forms}
						onFormUpdate={this.props.onFormUpdate}
						openEntryViewerForForm={this.props.openEntryViewerForForm}
					/>
				</div>
			);
		}
		return (
			<Notice
				status="error"
				isDismissible
			>
				No Forms Found
			</Notice>
		);
	}

	render() {
		const {forms} = this.props;
		return (
			<div>
				<Toolbar.NavBar
					label="Forms"
					onActive={this.handleActive}
					onDeactive={this.handleDeactive}
					isActive={this.state.active}
				/>
				{this.state.active &&
				<FormAdminView.Content>
					{this.getContent(forms)}
				</FormAdminView.Content>
				}

			</div>
		);
	}


}


FormsSlot.propTypes = FormList.propTypes;
FormsSlot.defaultProps = {
	forms: {},
	entries: {}
};