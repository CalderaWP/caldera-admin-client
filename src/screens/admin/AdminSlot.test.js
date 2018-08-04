import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Forms from './Forms';

Enzyme.configure({adapter: new Adapter()});
const handler = () => {
};

describe('Admin screen slot/ fills', () => {
	it('Activates', () => {
		const component = shallow(
			<Forms
				openEntryViewerForForm={handler}
				onFormUpdate={handler}
			/>
		);
		component.setState({active: false});
		component.instance().handleActive();
		expect(component.state('active')).toBe(true);
	});

	it('Deactivates', () => {
		const component = shallow(
			<Forms
				openEntryViewerForForm={handler}
				onFormUpdate={handler}
			/>
		);
		component.setState({active: true});
		component.instance().handleDeactive();
		expect(component.state('active')).toBe(false);
	});
});