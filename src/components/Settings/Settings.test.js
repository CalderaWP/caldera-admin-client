import renderer from 'react-test-renderer';
import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Settings} from "./Settings";

Enzyme.configure({adapter: new Adapter()});
const handler = () => {
};

describe( 'Settings component', () => {
	it( 'Renders with minimal props', () => {
		const componet = renderer.create(
			<Settings
				onTabSelect={handler}
				onSettingsSave={handler}

			/>
		);
		expect(componet.toJSON()).toMatchSnapshot();
	});


	it( 'merges pro settings on update without loosing general settings', () => {
		let updated = {};
		const settings = {
			generalSettings: {
				styleIncluded:{
					form: true
				}
			}
		};
		const componet = shallow(
			<Settings
				generalSettings={settings.generalSettings}
				onTabSelect={handler}
				onSettingsSave={(update) => {
					updated = update;
				}}
			/>
		);
		componet.instance().onSettingsSave({proSettings: {
			connected: true
		}});
		expect(updated.generalSettings).toEqual(settings.generalSettings);
		expect(updated.proSettings.connected).toEqual(true);

	});
});