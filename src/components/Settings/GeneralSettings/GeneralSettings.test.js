import renderer from 'react-test-renderer';
import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GeneralSettings} from './GeneralSettings'
import {STYLE_ALERT, STYLE_GRID} from "./configFields";
import configFields from './configFields';
import {PRO_CONNECTED} from "../ProSettings/proSettingsType";

const handler = () => {
};
Enzyme.configure({adapter: new Adapter()});
const settings = {
	proSettings: {
		[PRO_CONNECTED]: true
	}
}
describe('GeneralSettings component', () => {
	it('Matches snapshot with minimal props', () => {
		expect(
			renderer.create(
				<GeneralSettings
					onSettingsChange={() => {
					}}
					settings={settings}
				/>
			).toJSON()
		).toMatchSnapshot()
	});

	describe('configField preparation', () => {
		it('Has the right number of fields', () => {
			const component = shallow(
				<GeneralSettings
					onSettingsChange={handler}
					settings={settings}

				/>
			);
			expect(component.instance().getConfigFields().length)
				.toEqual(configFields.length);
		});


		it('Adds change handlers', () => {
			const component = shallow(
				<GeneralSettings
					onSettingsChange={handler}
					settings={settings}
				/>
			);
			expect(typeof component.instance().getConfigFields()[0].onValueChange)
				.toEqual('function');
		});

	});
});