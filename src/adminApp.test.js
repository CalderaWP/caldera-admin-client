
import AdminApp from "./AdminApp";
import {store,state} from '@caldera-labs/state';
const forms = require('./test-data/forms').default;
import {select} from '@wordpress/data';
describe('AdminApp ', () => {
	it.skip('renders without crashing', () => {
		document.createElement('div');
		const app = new AdminApp();
		app.renderToDom( 'div' );
	});

	describe('Dispatching actions', () => {
		it( 'has dispatch', () => {
			const app = new AdminApp();
			expect(typeof app.getStore().dispatch ).toEqual('function' );
		});

		it( 'Can dispatch actions', () => {
			const app = new AdminApp();
			app.getStore().dispatch(
				store.actions.setForms(forms)
			);

			expect(
				app.getStore().getState()[state.CALDERA_FORMS_STORE_SLUG].forms
			 ).toEqual(forms );
		});
	});

});