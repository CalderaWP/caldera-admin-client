import React from 'react';
import ReactDOM from 'react-dom';
import CalderaFormsAdmin from './CalderaFormsAdmin';
import {CfAdminWithState} from "./CfAdminWithState";
import {Provider} from 'react-redux';
import {CALDERA_ADMIN_STORE} from "./store";
import {shallow,mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});


const genericHandler = () => {};
describe('CalderaFormsAdmin component', () => {
	it('renders without crashing', () => {
		ReactDOM.render(<CalderaFormsAdmin
			getForm={genericHandler }
			getForms={genericHandler }
		/>, document.createElement('div'));
	});

	it( 'Finds current form', () => {
		const component = shallow(
			<CalderaFormsAdmin
				getForm={genericHandler }
				getForms={genericHandler }
			/>
		);

		component.setState({
			forms: {
				CF1 :{
					ID: 'CF1'
				},
				CF2: {
					ID: 'CF2'
				},
				CF3 :{
					ID: 'CF3'
				},

			},
			currentFormId: 'CF2'
		});
		expect( component.instance().getCurrentForm().ID).toBe('CF2');
	});

});

describe('CalderaFormsAdmin with state', () => {
	it('renders without crashing', () => {
		ReactDOM.render(
			<Provider store={CALDERA_ADMIN_STORE}>
				<CfAdminWithState />
			</Provider>,
			document.createElement('div2')
		);

	});

});

