import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ProFormSettings} from "./ProFormSettings";

Enzyme.configure({ adapter: new Adapter() });

describe( 'ProFormSettings component', () => {
	it( 'Matches snapshot with minimal props', () => {
		expect(
			renderer.create(
				<ProFormSettings/>
			).toJSON()
		).toMatchSnapshot()
	});

	it( 'Is wrapped in the right class', () => {
		expect(
			shallow(
				<ProFormSettings/>
			).find( '.' + ProFormSettings.classNames.wrapper )
				.length
		).toEqual(1)
	});
});