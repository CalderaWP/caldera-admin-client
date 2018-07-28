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
class App extends PureComponent {


	constructor(props) {
		super(props);
		this.state = {
			forms: [],
			currentFormId: '',
			currentView: 'forms'
		};
		this.updateForm = this.updateForm.bind(this);
		this.innerZone = this.innerZone.bind(this);
		this.onNavigate = this.onNavigate.bind(this);
		this.createForm = this.createForm.bind(this);
		this.saveSettings = this.saveSettings.bind(this);
	}


	updateForm(form) {
		this.props.setForm(form);
	}

	createForm(newForm){
		this.props.newForm(newForm);
	}

	saveSettings(updateSettings){
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
			case'forms':
			default:
				return (
					<FormList
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

App.propTypes = {
	forms: PropTypes.array,
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
	mainStatus: PropTypes.shape({
		message: PropTypes.string,
		show: PropTypes.bool,
		success: PropTypes.bool,
		updating: PropTypes.bool
	}),
};

App.defaultProps = {
	forms: [],
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
export default App;
