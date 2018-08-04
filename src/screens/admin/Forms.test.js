import renderer from 'react-test-renderer';
import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Forms from './Forms';
import forms from '../../test-data/forms'
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});
const handler = () => {
};


describe('Forms component', () => {
	it('Renders empty div when not active and has no forms', () => {
		expect(
			renderer.create(
				<Forms
					forms={{}}
					openEntryViewerForForm={handler}
					onFormUpdate={handler}
				/>
			).toJSON()
		).toMatchSnapshot();
	});

	it('Renders empty div when not active and has  forms', () => {
		expect(
			renderer.create(
				<Forms
					forms={forms}
					openEntryViewerForForm={handler}
					onFormUpdate={handler}
				/>
			).toJSON()
		).toMatchSnapshot();
	});
	it('Renders when active and has no forms', () => {
		const component = shallow(<Forms
			forms={{}}
			openEntryViewerForForm={handler}
			onFormUpdate={handler}
		/>);

		component.setState({active: true});
		expect(
			toJson(component)
		).toMatchSnapshot();
	});
	it('Renders when active and has forms', () => {
		const component = shallow(<Forms
			forms={forms}
			openEntryViewerForForm={handler}
			onFormUpdate={handler}
		/>);

		component.setState({active: true});
		expect(
			toJson(component)
		).toMatchSnapshot();
	});


});