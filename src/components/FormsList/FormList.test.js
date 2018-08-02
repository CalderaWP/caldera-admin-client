import renderer from "react-test-renderer";
import {FormList} from "./FormList";
import React from 'react';

const formOne = {
	ID: 'cf1',
	name: 'Form One'
};

describe('Example component', () => {
	it('Lists forms', () => {
		const formList = renderer.create(
			<FormList
				forms={[formOne]}
				onFormUpdate={()=> {}}
				openEntryViewerForForm={()=> {}}
			/>
		);
		expect(formList.toJSON()).toMatchSnapshot();
	});

});