import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import {CalderaAdminWithState} from "./CalderaAdminWithState";
import {Provider} from 'react-redux';
export default function AdminApp(){
	let domElement = null;
	this.getStore = function () {
		return store;
	};

	this.renderToDom = function( element ){

		ReactDOM.render(
			<Provider store={store}>
				<CalderaAdminWithState/>
			</Provider>,
			document.getElementById(element)
		);
	}
};