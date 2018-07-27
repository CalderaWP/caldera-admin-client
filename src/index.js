import React from 'react';
import ReactDOM from 'react-dom';
import {CfAdminWithState} from "./CfAdminWithState";
import {Provider} from 'react-redux';
import {CALDERA_ADMIN_STORE} from "./store";

ReactDOM.render(
	<Provider store={CALDERA_ADMIN_STORE}>
		<CfAdminWithState />
	</Provider>,
	document.getElementById('caldera-forms-admin')
);

