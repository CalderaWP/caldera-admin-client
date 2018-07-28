import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CfAdminWithState} from "./CfAdminWithState";
import {Provider} from 'react-redux';
import {CALDERA_ADMIN_STORE} from "./store";

describe('App component', () => {
	it('renders without crashing', () => {
		ReactDOM.render(<App
			getForm={() => {} }
			getForms={() => {} }
		/>, document.createElement('div'));
	});

});

describe('App with state', () => {
	it('renders without crashing', () => {
		ReactDOM.render(
			<Provider store={CALDERA_ADMIN_STORE}>
				<CfAdminWithState />
			</Provider>,
			document.createElement('div2')
		);

	});

});
