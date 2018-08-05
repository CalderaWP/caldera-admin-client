import React from 'react';
import ReactDOM from 'react-dom';
import CalderaFormsAdmin from './CalderaFormsAdmin';
import {CfAdminWithState} from "./CfAdminWithState";
import {Provider} from 'react-redux';
import {CALDERA_ADMIN_STORE} from "./store";
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PRO_CONNECTED, PRO_SETTINGS} from "./components/Settings/ProSettings/proSettingsType";

Enzyme.configure({adapter: new Adapter()});
import forms, {formWithIdCf2} from './test-data/forms'

const genericHandler = () => {
};
describe('CalderaFormsAdmin component', () => {
	it('renders without crashing', () => {
		ReactDOM.render(<CalderaFormsAdmin
			forms={forms}
			getForm={genericHandler}
			getForms={genericHandler}
		/>, document.createElement('div'));
	});


	describe('methods', () => {
		const settings = {
			[PRO_SETTINGS]: {
				[PRO_CONNECTED]: false
			}
		}
		it('reports pro not connected', () => {

			const component = shallow(
				<CalderaFormsAdmin
					forms={forms}
					getForm={genericHandler}
					getForms={genericHandler}
					settings={settings}
				/>);
			expect(component.instance().isProConnected()).toBe(false);
		});

		it('reports pro connected', () => {
			const settings = {
				[PRO_SETTINGS]: {
					[PRO_CONNECTED]: true
				}
			}
			const component = shallow(
				<CalderaFormsAdmin
					forms={forms}
					getForm={genericHandler}
					getForms={genericHandler}
					settings={settings}
				/>);
			expect(component.instance().isProConnected()).toBe(true);
		});



		it('On create forms', () => {

			let newForm = {};
			const component = shallow(
				<CalderaFormsAdmin
					createFrom={(value) => {
						newForm = value;
					}}
					forms={forms}
					getForm={genericHandler}
					getForms={genericHandler}
					settings={settings}
				/>);

			component.instance().onCreateForm(formWithIdCf2);
			expect(newForm).toEqual(formWithIdCf2);

		});

		it('Sets entry viewer form', () => {
			const component = shallow(
				<CalderaFormsAdmin
					forms={forms}
					getForm={genericHandler}
					getForms={genericHandler}
					settings={settings}
				/>);

			component.instance().onOpenEntryViewerForForm(formWithIdCf2.ID);
			expect(component.state('entryViewerForm')).toEqual(formWithIdCf2);

		});

		it('showEntryViewer returns true when state allows it', () => {
			let newForm = {};
			const component = shallow(
				<CalderaFormsAdmin
					createFrom={genericHandler}
					forms={forms}
					getForm={genericHandler}
					getForms={genericHandler}
					settings={settings}
				/>);

			component.setState({entryViewerForm:formWithIdCf2});
			expect(component.instance().showEntryViewer()).toEqual(true);
		});

		it('showEntryViewer returns false when state does not allow it', () => {
			let newForm = {};
			const component = shallow(
				<CalderaFormsAdmin
					createFrom={genericHandler}
					forms={forms}
					getForm={genericHandler}
					getForms={genericHandler}
					settings={settings}
				/>);

			component.setState({entryViewerForm:{}});
			expect(component.instance().showEntryViewer()).toEqual(false);
		});

	});

});

describe('CalderaFormsAdmin with state', () => {
	it.skip('renders without crashing', () => {
		ReactDOM.render(
			<Provider store={CALDERA_ADMIN_STORE}>
				<CfAdminWithState/>
			</Provider>,
			document.createElement('div2')
		);

	});

});

