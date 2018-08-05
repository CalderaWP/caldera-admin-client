import React from 'react';
import ReactDOM from 'react-dom';
import {CfAdminWithState} from "./CfAdminWithState";
import {Provider} from 'react-redux';
import store from "./store";
ReactDOM.render(
	<Provider store={store}>
		<CfAdminWithState/>
	</Provider>,
	document.getElementById('caldera-forms-admin')
);

