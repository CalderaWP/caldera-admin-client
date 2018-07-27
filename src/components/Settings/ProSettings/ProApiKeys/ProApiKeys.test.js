import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ProApiKeys} from "./ProApiKeys";

Enzyme.configure({ adapter: new Adapter() });

describe( 'ProApiKeys component', () => {
	it( 'Matches snapshot with minimal props', () => {
		expect(
			renderer.create(
				<ProApiKeys/>
			).toJSON()
		).toMatchSnapshot()
	});

	it( 'Is wrapped in the right class', () => {
		expect(
			shallow(
				<ProApiKeys/>
			).find( '.' + ProApiKeys.classNames.wrapper )
				.length
		).toEqual(1)
	});
});