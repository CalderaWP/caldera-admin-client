import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ProSettings} from "./ProSettings";

Enzyme.configure({ adapter: new Adapter() });

describe( 'ProSettings component', () => {
	it( 'Matches snapshot with minimal props', () => {
		expect(
			renderer.create(
				<ProSettings/>
			).toJSON()
		).toMatchSnapshot()
	});

	it( 'Is wrapped in the right class', () => {
		expect(
			shallow(
				<ProSettings/>
			).find( '.' + ProSettings.classNames.wrapper )
				.length
		).toEqual(1)
	});
});