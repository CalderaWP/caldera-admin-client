import renderer from "react-test-renderer";
import React from 'react';
import {shallow} from 'enzyme';
import store, {CALDERA_FORMS_ADMIN_STORE} from  './store';
import {withSelect} from '@wordpress/data'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {state}  from '@caldera-labs/state';
import {
	CALDERA_FORMS_TEMPLATE_STORE_SLUG,
	formTemplateReducer
} from "./state/templates-store";
const {reducers} = state;
Enzyme.configure({adapter: new Adapter()});


describe( ' store', () => {
	describe( 'registering store', () => {
		it('Has reducers from state', () => {
			const state = store.getState();
			Object.keys(reducers).forEach(reducerKey => {
				expect(state.hasOwnProperty(reducerKey)).toEqual(true);
			});
		});

		it.skip('Has form template reducer', () => {
			const state = store.getState();
			expect(state.hasOwnProperty(CALDERA_FORMS_TEMPLATE_STORE_SLUG)).toEqual(true);
		});
	});




});

