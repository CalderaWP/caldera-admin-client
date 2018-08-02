import React, {PureComponent} from 'react';
import './css/wp-admin.css';
import './css/legacy/admin.css';
import './css/shame.css';
import {Admin} from '@caldera-labs/components'
import PropTypes from 'prop-types';
import {FormList} from "./components/FormsList/FormList";
import {NavBar} from "./components/Layout/NavBar";
import {Settings} from "./components/Settings/Settings";
import {Button} from '@wordpress/components'
import {NewForm} from "./components/NewForm/NewForm";
import {Status} from "./components/Layout/Status";
import classNames from 'classnames';
import {FormEntryViewer} from "./components/EntryViewer/FormEntryViewer";

/**
 * The
 */
class CalderaFormsAdmin extends PureComponent {


	constructor(props) {
		super(props);
		this.state = {
			forms: {
				cf1: {
					ID: 'CF1',
					name: 'name One',

				},
				cf2: {
					"ID": "cf2",
					"name": "Primary Contact Form",
					"fields": {
						"fld_8768091": {
							"ID": "fld_8768091",
							"name": "First Name",
							"type": "text"
						},
						"fld_9970286": {
							"ID": "fld_9970286",
							"name": "Last Name",
							"type": "text"
						},
						"fld_6009157": {
							"ID": "fld_6009157",
							"name": "Email Address",
							"type": "email"
						},
						"fld_7683514": {
							"ID": "fld_7683514",
							"name": "Comments Questions",
							"type": "paragraph"
						}
					},
					"emailIdentifyingFields": [],
					"piiFields": [],
					"privacyExporterEnabled": false,
					"field_details": {
						"order": {
							"fld_8768091": {
								"id": "fld_8768091",
								"label": "First Name"
							},
							"fld_9970286": {
								"id": "fld_9970286",
								"label": "Last Name"
							},
							"fld_6009157": {
								"id": "fld_6009157",
								"label": "Email Address"
							},
							"fld_7683514": {
								"id": "fld_7683514",
								"label": "Comments Questions"
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
					},
					"mailer": {
						"active": false
					},
					"entries" : {
						count: 3
					}
				}
			},
			currentFormId: '',
			currentView: 'forms'
		};
		this.updateForm = this.updateForm.bind(this);
		this.innerZone = this.innerZone.bind(this);
		this.onNavigate = this.onNavigate.bind(this);
		this.createForm = this.createForm.bind(this);
		this.saveSettings = this.saveSettings.bind(this);
		this.openEntryViewerForForm = this.openEntryViewerForForm.bind(this);
		this.getCurrentForm = this.getCurrentForm.bind(this);
	}


	getCurrentForm(){
		const {currentFormId,forms} = this.state;
		return forms.hasOwnProperty(
			currentFormId
		) ? forms[currentFormId] : {}
	}

	openEntryViewerForForm(formId){
			this.setState({
				currentFormId: formId,
				currentView:'entries'
			});
	}

	updateForm(form) {
		this.props.setForm(form);
	}

	createForm(newForm){
		this.props.newForm(newForm);
	}

	saveSettings(updateSettings){
		this.props.startSpinner();
		setTimeout(
			function() {
				this.props.stopSpinner();
				this.props.updateStatus(
					'Settings Saved'
				);

			}
				.bind(this),
			3000
		);
		this.props.setProSettings(updateSettings.proSettings);
		this.props.updateStyleIncludes(updateSettings.generalSettings.styleIncludes);
		this.props.updateOtherSettings(updateSettings.generalSettings.otherSettings);
	}

	innerZone(){
		const {currentView} = this.state;
		switch (currentView){
			case 'newForm':
				return(
					<NewForm onCreate={this.createForm}/>
				);
			case 'settings':
				return (
					<Settings
						onSettingsSave={this.saveSettings}
						proSettings={this.props.proSettings}
						generalSettings={this.props.generalSettings}
						onTabSelect={(newTab) => {
							console.log(newTab)
						}}
					/>
				);
			case 'entries' :
				return(
					<FormEntryViewer form={this.getCurrentForm()}/>
				);
			case'forms':
			default:
				return (
					<FormList
						openEntryViewerForForm={this.openEntryViewerForForm}
						forms={this.state.forms}
						onFormUpdate={this.updateForm}
					/>
				)
		}
	}

	onNavigate(selected){
		this.setState({currentView: selected } );
	}

	render() {
		return (
			<Admin.PageBody>
				<Admin.CalderaHeader>
					<li
						className={'caldera-forms-toolbar-item'}
					>
						<Button
							onClick={() => this.setState({currentView:'newForm'})}
							className={'button button-primary caldera-forms-new-forms-button'}
						>
							New Form
						</Button>
					</li>
					<li
						className={classNames(
							'caldera-forms-toolbar-item',
							'caldera-forms-pro-status'
						)}
					>
						<Status
							message={
								this.props.proSettings.connected ? 'Connected' : 'Not Connected'
							}
							error={!!this.props.proSettings.connected }
							show={true}
						/>
					</li>
					<li
						className={classNames(
							'caldera-forms-toolbar-item',
							'caldera-forms-main-status'
						)}
					>
						<Status
							message={this.props.mainStatus.message}
							success={this.props.mainStatus.success}
							updating={this.props.mainStatus.updating}
							show={this.props.mainStatus.show}
						/>
					</li>
					<li>
						{this.state.currentView}
					</li>
				</Admin.CalderaHeader>
				<div>
					<NavBar
						onNavigate={this.onNavigate}
						choices={[
							{
								value: 'forms',
								label: 'Forms',
								icon: 'feedback'
							},
							{
								value: 'settings',
								label: 'Settings',
								icon: 'admin-settings'
							}
						]}
						value={this.state.currentView}
					>
					</NavBar>
					<div
						className={'caldera-editor-body caldera-config-has-side'}
						>
							{this.innerZone()}
					</div>
				</div>

			</Admin.PageBody>
		);
	}
}

CalderaFormsAdmin.propTypes = {
	forms: PropTypes.object,
	getForms: PropTypes.func.isRequired,
	getForm: PropTypes.func.isRequired,
	setForms: PropTypes.func,
	setForm: PropTypes.func,
	newForm: PropTypes.func,
	proSettings: PropTypes.object,
	setProSettings: PropTypes.func,
	getGeneralSettings: PropTypes.func,
	updateStyleIncludes: PropTypes.func,
	updateOtherSettings: PropTypes.func,
	generalSettings: PropTypes.func,
	startSpinner: PropTypes.func,
	stopSpinner: PropTypes.func,
	closeStatus: PropTypes.func,
	updateStatus: PropTypes.func,
	mainStatus: PropTypes.shape({
		message: PropTypes.string,
		show: PropTypes.bool,
		success: PropTypes.bool,
		updating: PropTypes.bool
	}),
};

CalderaFormsAdmin.defaultProps = {
	forms: {},
	proSettings: {
		connected: false,
	},
	mainStatus:{
		message: '',
		show: false,
		success: false,
		updating: false
	},
};
export default CalderaFormsAdmin;
