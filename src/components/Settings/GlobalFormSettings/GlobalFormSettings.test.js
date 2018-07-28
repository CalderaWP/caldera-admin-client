import renderer from 'react-test-renderer';
import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GlobalFormSettings} from "./GlobalFormSettings";
import {STYLE_ALERT, STYLE_GRID} from "./configFields";
import configFields from './configFields';

const handler = () => {
};
Enzyme.configure({adapter: new Adapter()});

describe('GlobalFormSettings component', () => {
	it('Matches snapshot with minimal props', () => {
		expect(
			renderer.create(
				<GlobalFormSettings
					onSettingsSave={() => {
					}}
				/>
			).toJSON()
		).toMatchSnapshot()
	});

	it('Is wrapped in the right class', () => {
		expect(
			shallow(
				<GlobalFormSettings
					onSettingsSave={() => {
					}}
				/>
			).find('.' + GlobalFormSettings.classNames.wrapper)
				.length
		).toEqual(1)
	});


	it('Merges props and state', () => {
		const component = shallow(
			<GlobalFormSettings
				styleIncludes={{
					[STYLE_ALERT]: false,
				}}
				onSettingsSave={handler}
			/>);
		expect(
			typeof component.state('styleIncludes')
		).toBe('object');

		expect(
			typeof  component.state('otherSettings')
		).toBe('object');

		expect(
			component.state('styleIncludes')[STYLE_ALERT]
		).toBe(false);

		expect(
			component.state('styleIncludes').hasOwnProperty(STYLE_GRID)
		).toBe(true);

	});

	it('updates state when settings change', () => {
		const component = shallow(
			<GlobalFormSettings
				onSettingsSave={handler}
			/>
		);
		component.instance().onSettingsChange(
			{
				styleIncludes: {
					[STYLE_ALERT]: false
				}
			}
		)
		expect(component.state('styleIncludes')[STYLE_ALERT])
			.toBe(false);
	});

	describe('configField preparation', () => {
		it('Has the right number of fields', () => {
			const component = shallow(
				<GlobalFormSettings
					onSettingsSave={handler}
				/>
			);
			expect(component.instance().getConfigFields().length)
				.toEqual(configFields.length);
		});

		it('Sets value from state', () => {
			const component = shallow(
				<GlobalFormSettings
					styleIncludes={{
						[STYLE_ALERT]: false
					}}
					onSettingsSave={handler}
				/>
			);
			expect(component.state('styleIncludes')[STYLE_ALERT])
				.toEqual(false);
			expect(component.state('styleIncludes')[STYLE_GRID])
				.toEqual(true);
		});

		it('Adds change handlers', () => {
			const component = shallow(
				<GlobalFormSettings
					onSettingsSave={handler}
				/>
			);
			expect(typeof component.instance().getConfigFields()[0].onValueChange)
				.toEqual('function');
		});

		it('Provides state on save', () => {
			let received = {};
			const component = shallow(
				<GlobalFormSettings
					styleIncludes={{
						[STYLE_ALERT]: false
					}}
					onSettingsSave={(newValues) => {
						received = newValues;
					}}
				/>
			);

			component.instance().onSettingsSave();
			expect( received.generalSettings.styleIncludes[STYLE_ALERT])
				.toEqual(false);

		});


	});
});