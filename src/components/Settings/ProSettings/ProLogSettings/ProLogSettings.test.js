import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ProLogSettings} from "./ProLogSettings";

Enzyme.configure({ adapter: new Adapter() });

describe( 'ProLogSettings component', () => {
	it( 'Matches snapshot with minimal props', () => {
		expect(
			renderer.create(
				<ProLogSettings/>
			).toJSON()
		).toMatchSnapshot()
	});

	it( 'Is wrapped in the right class', () => {
		expect(
			shallow(
				<ProLogSettings/>
			).find( '.' + ProLogSettings.classNames.wrapper )
				.length
		).toEqual(1)
	});
});