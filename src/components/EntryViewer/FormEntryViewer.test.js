import renderer from "react-test-renderer";
import React from 'react';
import {FormEntryViewer} from "./FormEntryViewer";
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import {formWithIdCf2} from "./test-data/forms";

const genericHandler = () => {};
describe( 'Form entry viewer', () => {

	it.skip( 'Matches snapshot', () => {
		expect(
			renderer.create(
				<FormEntryViewer
					form={formWithIdCf2}
					getEntries={genericHandler}
				/>
			).toJSON()
		).toMatchSnapshot();
	});


});


