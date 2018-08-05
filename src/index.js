import React from 'react';
import ReactDOM from 'react-dom';
import {CfAdminWithState} from "./CfAdminWithState";
import {Provider} from 'react-redux';
import store from "./store";
import CalderaFormsAdmin from './CalderaFormsAdmin'
ReactDOM.render(
	<Provider store={store}>
		<CalderaFormsAdmin/>
	</Provider>,
	document.getElementById('caldera-forms-admin')
);

