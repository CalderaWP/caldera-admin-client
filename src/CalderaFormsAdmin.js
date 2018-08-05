import React, {Component} from 'react';
import {SlotFillProvider} from '@wordpress/components'
import Toolbar from "./screens/admin/Toolbar";
import FormAdminView from "./screens/admin/FormAdminView";
import CreateFormSlot from "./screens/admin/CreateFormSlot";
import FormsSlot from "./screens/admin/FormsSlot";
import SettingsSlot from "./screens/admin/SettingsSlot";
import EntryViewerSlot from "./screens/admin/EntryViewerSlot";
import types, {collectionTypes} from './types'
import {PRO_CONNECTED, PRO_SETTINGS} from "./components/Settings/ProSettings/proSettingsType";
import statusType from "./components/Layout/statusType";
import PropTypes from "prop-types";

/**
 * The main container for Caldera Forms admin
 */
class CalderaFormsAdmin extends Component {

	constructor(props) {
		super(props);
		this.state = {
			entryViewerForm: {}
		};
		this.onFormUpdate = this.onFormUpdate.bind(this);
		this.onCreateForm = this.onCreateForm.bind(this);
		this.isProConnected = this.isProConnected.bind(this);
		this.onOpenEntryViewerForForm = this.onOpenEntryViewerForForm.bind(this);
		this.showEntryViewer = this.showEntryViewer.bind(this);
	}

	/**
	 * Dispatch form update to parent
	 * @param form
	 */
	onFormUpdate(form) {
		this.props.onFormUpdate(form)
	}

	/**
	 * When entry viewer is opened
	 *
	 * @param {String} formId
	 */
	onOpenEntryViewerForForm(formId) {
		this.setState({
			entryViewerForm: this.props.forms[formId]
		});
	}

	/**
	 *
	 * @param {String} newForm
	 */
	onCreateForm(newForm) {
		this.props.createFrom(newForm)
	}

	/**
	 * Check if Caldera FormsSlot Pro is connected or not
	 * @return {*|boolean}
	 */
	isProConnected() {
		return this.props.settings.proSettings[PRO_CONNECTED];
	}

	/**
	 * Check if entry viewe should show
	 * @return {boolean}
	 */
	showEntryViewer() {
		const {entryViewerForm} = this.state;
		return 0 !== Object.keys(entryViewerForm).length && entryViewerForm.hasOwnProperty('fields')

	}

	/**
	 * @inheritDoc
	 */
	render() {
		const {forms, mainStatus, settings, updateSettings, entries} = this.props;
		return (
			<div>
				<SlotFillProvider>
					<Toolbar
						isProConnected={this.isProConnected()}
						mainStatus={mainStatus}
					/>
					<FormsSlot
						forms={forms}
						onFormUpdate={this.onFormUpdate}
						openEntryViewerForForm={this.onOpenEntryViewerForForm}
					/>
					<CreateFormSlot
						forms={forms}
						onCreateForm={this.onCreateForm}
					/>
					<SettingsSlot
						forms={forms}
						settings={settings}
						updateSettings={updateSettings}
					/>
					{this.showEntryViewer() &&
						<EntryViewerSlot
							form={this.state.entryViewerForm}
							entries={entries}
						/>
					}

					<FormAdminView/>

				</SlotFillProvider>
			</div>
		);
	}
}

const {formsType, entriesType, settingsType} = collectionTypes;
/**
 * Prop types for  CalderaFormsAdmin component
 * @type {{forms: shim, entries: shim, settings, mainStatus, updateSettings: shim, updateForms: shim, createFrom: shim}}
 */
CalderaFormsAdmin.propTypes = {
	forms: formsType,
	entries: entriesType,
	settings: settingsType,
	mainStatus: statusType,
	updateSettings: PropTypes.func,
	updateForms: PropTypes.func,
	createFrom: PropTypes.func,
};

/**
 * Default props for  CalderaFormsAdmin component
 * @type {{settings: {[p: string]: {}}, mainStatus: {message: string, show: boolean, success: boolean, updating: boolean}}}
 */
CalderaFormsAdmin.defaultProps = {
	settings: {
		[PRO_SETTINGS]: {
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