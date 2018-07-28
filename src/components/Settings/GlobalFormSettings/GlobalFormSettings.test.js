import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GlobalFormSettings} from "./GlobalFormSettings";

Enzyme.configure({ adapter: new Adapter() });

describe( 'GlobalFormSettings component', () => {
	it( 'Matches snapshot with minimal props', () => {
		expect(
			renderer.create(
				<GlobalFormSettings
					onSettingsSave={() => {} }
				/>
			).toJSON()
		).toMatchSnapshot()
	});

	it( 'Is wrapped in the right class', () => {
		expect(
			shallow(
				<GlobalFormSettings
					onSettingsSave={() => {} }
				/>
			).find( '.' + GlobalFormSettings.classNames.wrapper )
				.length
		).toEqual(1)
	});
});