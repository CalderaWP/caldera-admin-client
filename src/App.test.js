import React from 'react';
import ReactDOM from 'react-dom';
import CalderaFormsAdmin from './CalderaFormsAdmin';
import {CfAdminWithState} from "./CfAdminWithState";
import {Provider} from 'react-redux';
import {CALDERA_ADMIN_STORE} from "./store";

const genericHandler = () => {};
describe('CalderaFormsAdmin component', () => {
	it('renders without crashing', () => {
		ReactDOM.render(<CalderaFormsAdmin
			getForm={genericHandler }
			getForms={genericHandler }
		/>, document.createElement('div'));
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
