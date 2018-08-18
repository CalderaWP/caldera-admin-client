import renderer from "react-test-renderer";
import {Form} from "./Form";
import React from 'react';
const formOne = {
	ID: 'cf1',
	name: 'Form One',
	editLink: '/forms/edit/1'
};

describe('FormsSlot list component', () => {

	it('Lists forms', () => {
		const formList = renderer.create(
				<Form
					form={formOne}
					onFormUpdate={()=> {}}
					openEntryViewerForForm={()=> {}}
				/>
		);
		expect(formList.toJSON()).toMatchSnapshot();
	});

});