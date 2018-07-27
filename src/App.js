import React, {PureComponent} from 'react';
import './css/wp-admin.css';
import './css/legacy/admin.css';
import {Admin} from '@caldera-labs/components'
import propTypes from 'prop-types'
import {FormList} from "./components/FormsList/FormList";

class App extends PureComponent {


	constructor(props) {
		super(props);
		this.state = {
			forms: [],
			currentFormId: ''
		}
		this.updateForm = this.updateForm.bind(this);
	}


	updateForm(form) {
		this.props.setForm(form);
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
					<FormList
						forms={this.state.forms}
						onFormUpdate={this.updateForm}
					/>

				</div>

			</Admin.PageBody>
		);
	}
}

App.propTypes = {
	forms: propTypes.array,
	getForms: propTypes.func.isRequired,
	getForm: propTypes.func.isRequired,
	setForms: propTypes.func,
	setForm: propTypes.func
};

App.defaultProps = {
	forms: []
};
export default App;
