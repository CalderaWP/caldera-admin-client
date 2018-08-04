import React, {Component} from 'react';
import {SlotFillProvider} from '@wordpress/components'
import Toolbar from "./screens/admin/Toolbar";
import Viewer from "./screens/admin/Viewer";
import CreateForm from "./screens/admin/CreateForm";
import Forms from "./screens/admin/Forms";
import types, {collectionTypes} from './types'
import {PRO_CONNECTED, PRO_SETTINGS} from "./components/Settings/ProSettings/proSettingsType";
import statusType from "./components/Layout/statusType";
import PropTypes from "prop-types";

/**
 * The
 */
class CalderaFormsAdmin extends Component {

	constructor(props) {
		super(props);
		this.onFormUpdate = this.onFormUpdate.bind(this);
		this.onSelectForm = this.onSelectForm.bind(this);
		this.onCreateForm = this.onCreateForm.bind(this);
		this.isProConnected = this.isProConnected.bind(this);
	}

	onFormUpdate(form) {
		this.props.onFormUpdate(form)
	}

	onSelectForm(formId) {
		this.props.openEntryViewerForForm(formId)
	}

	onCreateForm(newForm) {
		this.props.onCreateForm(newForm)
	}

	/**
	 * Check if Caldera Forms Pro is connected or not
	 * @return {*|boolean}
	 */
	isProConnected(){
		return this.props.settings.proSettings[PRO_CONNECTED];
	}


	render() {
		const {forms,mainStatus} = this.props;
		return (
			<div>
				<SlotFillProvider>
						<Toolbar
							isProConnected={this.isProConnected()}
							mainStatus={mainStatus}
						/>
						<Forms
							forms={forms}
							onFormUpdate={this.onFormUpdate}
							openEntryViewerForForm={this.onSelectForm}
						/>
						<CreateForm
							forms={forms}
							onCreateForm={this.onCreateForm}
						/>
						<Viewer/>
				</SlotFillProvider>
			</div>
		);
	}
}

const {formsType,entriesType,settingsType } = collectionTypes;
CalderaFormsAdmin.propTypes = {
	forms: formsType,
	entries: entriesType,
	settings: settingsType,
	mainStatus: statusType
};

CalderaFormsAdmin.defaultProps = {
	settings: {
		[PRO_SETTINGS] : {
			[PRO_CONNECTED]: false
		}
	},
	mainStatus: {
		message: '',
		show: false,
		success: false,
		updating: false
	}
};

export default CalderaFormsAdmin