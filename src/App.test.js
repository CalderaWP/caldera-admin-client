import React from 'react';
import ReactDOM from 'react-dom';
import CalderaFormsAdmin from './CalderaFormsAdmin';
import {CfAdminWithState} from "./CfAdminWithState";
import {Provider} from 'react-redux';
import {CALDERA_ADMIN_STORE} from "./store";
import {shallow,mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PRO_CONNECTED} from "./components/Settings/ProSettings/proSettingsType";
Enzyme.configure({adapter: new Adapter()});


const genericHandler = () => {};
describe('CalderaFormsAdmin component', () => {
	it('renders without crashing', () => {
		ReactDOM.render(<CalderaFormsAdmin
			getForm={genericHandler }
			getForms={genericHandler }
		/>, document.createElement('div'));
	});




	describe( 'methods', () => {

		it( 'reports pro not connected', () => {
			const settings = {
				proSettings: {
					[PRO_CONNECTED] : false
				}
			}
			const component = shallow(
				<CalderaFormsAdmin
					getForm={genericHandler }
					getForms={genericHandler }
					settings={settings}
			/> );
			expect(component.instance().isProConnected() ).toBe(false);
		});

		it( 'reports pro connected', () => {
			const settings = {
				proSettings: {
					[PRO_CONNECTED] : true
				}
			}
			const component = shallow(
				<CalderaFormsAdmin
					getForm={genericHandler }
					getForms={genericHandler }
					settings={settings}
				/> );
			expect(component.instance().isProConnected() ).toBe(true);
		});


	});

});

describe('CalderaFormsAdmin with state', () => {
	it.skip('renders without crashing', () => {
		ReactDOM.render(
			<Provider store={CALDERA_ADMIN_STORE}>
				<CfAdminWithState />
			</Provider>,
			document.createElement('div2')
		);

	});

});

