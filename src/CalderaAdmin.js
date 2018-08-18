import React, {Component} from 'react';
import {SlotFillProvider} from '@wordpress/components'
import FormAdminToolbar from "./screens/admin/FormAdminToolbar";
import FormAdminMainView from "./screens/admin/FormAdminMainView";
import FormAdminHelpView from "./screens/admin/FormAdminHelpView";
import CreateFormSlot from "./screens/admin/CreateFormSlot";
import FormsSlot from "./screens/admin/FormsSlot";
import SettingsSlot from "./screens/admin/SettingsSlot";
import EntryViewerSlot from "./screens/admin/EntryViewerSlot";
import {collectionTypes} from './types'
import {PRO_CONNECTED, PRO_SETTINGS} from "./components/Settings/ProSettings/proSettingsType";
import statusType from "./components/Layout/statusType";
import PropTypes from "prop-types";
import {store} from '@caldera-labs/state'


/**
 * The main container for Caldera Forms admin
 */
class CalderaAdmin extends Component {

	constructor(props) {
		super(props);
		this.state = {
			entryViewerForm: {},
			forms: {
				cf1: {
					ID: 'CF1',
					name: 'name One',
					field_details: {
						"order": {
							"firstName": {
								"id": "firstName",
								"label": "First Name"
							},
							"lastName": {
								"id": "lastName",
								"label": "Last Name"
							},
							"strongName": {
								"id": "strongName",
								"label": "Strong Bad"
							}
						},
						"entry_list": {
							"id": {
								"id": "id",
								"label": "ID"
							},
							"datestamp": {
								"id": "datestamp",
								"label": "Submitted"
							}
						}
					}
				}
			}
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
		return this.props.settings[PRO_SETTINGS][PRO_CONNECTED];
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
					<FormAdminToolbar
						isProConnected={this.isProConnected()}
						mainStatus={mainStatus}
					/>
					<FormsSlot
						forms={this.state.forms}
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
						updateSeqttings={updateSettings}
					/>
					{this.showEntryViewer() &&
						<EntryViewerSlot
							form={this.state.entryViewerForm}
							entries={entries}
						/>
					}
					<FormAdminMainView/>
					<FormAdminHelpView/>

				</SlotFillProvider>
			</div>
		);
	}
}

const {formsType, entriesType, settingsType} = collectionTypes;
const {actions,selectors} = store;

/**
 * Prop types for  CalderaAdmin component
 * @type {{forms: shim, entries: shim, settings, mainStatus, updateSettings: shim, updateForms: shim, createFrom: shim}}
 */
CalderaAdmin.propTypes = {
	...{
		forms: formsType,
		entries: entriesType,
		settings: settingsType,
		mainStatus: statusType,
	},
};

Object.keys(actions).forEach( actionKey => {
	CalderaAdmin.propTypes[actionKey] = PropTypes.func;
});
Object.keys(selectors).forEach( selectorKey => {
	CalderaAdmin.propTypes[selectorKey] = PropTypes.func;
});

CalderaAdmin.defaultProps = {
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

export default CalderaAdmin