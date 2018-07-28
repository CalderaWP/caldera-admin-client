import React, {PureComponent} from 'react';
import './css/wp-admin.css';
import './css/legacy/admin.css';
import './css/shame.css';
import {Admin} from '@caldera-labs/components'
import PropTypes from 'prop-types';
import {FormList} from "./components/FormsList/FormList";
import {NavBar} from "./components/Layout/NavBar";
import {Settings} from "./components/Settings/Settings";

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
	}


	updateForm(form) {
		this.props.setForm(form);
	}

	innerZone(){
		const {currentView} = this.state;
		switch (currentView){
			case 'settings':
				return (
					<Settings
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
						<button className={'button button-primary'}>
							New Form
						</button>
					</li>
					<li
						className={'caldera-forms-toolbar-item'}
					>
						<Admin.StatusIndicator
							message={'Hi Roy'}
							show={true}
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
	setForm: PropTypes.func
};

App.defaultProps = {
	forms: []
};
export default App;
