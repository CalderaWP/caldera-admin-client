import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import {CalderaAdminWithState} from "./CalderaAdminWithState";
import {Provider} from 'react-redux';
export default function AdminApp(){
	let domElement = null;

	/**
	 * Get the current Redux(-like) store
	 */
	this.getStore = function () {
		return store;
	};

	/**
	 * Render admin app to dom
	 * @param {String} element ID attribute of element to mount app on
	 */
	this.renderToDom = function( element ){

		ReactDOM.render(
			<Provider store={store}>
				<CalderaAdminWithState/>
			</Provider>,
			document.getElementById(element)
		);
	}
};