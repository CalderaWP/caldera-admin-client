import React from 'react';
import ReactDOM from 'react-dom';
import {CalderaAdminWithState} from "./CalderaAdminWithState";
import {Provider} from 'react-redux';
import store from "./store";
ReactDOM.render(
	<Provider store={store}>
		<CalderaAdminWithState/>
	</Provider>,
	document.getElementById('caldera-forms-admin')
);

