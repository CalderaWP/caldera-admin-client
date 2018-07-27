import renderer from "react-test-renderer";
import {Form} from "./Form";
import React from 'react';
const formOne = {
	ID: 'cf1',
	name: 'Form One'
};

describe('Example component', () => {

	it('Lists forms', () => {
		const formList = renderer.create(
				<Form
					form={formOne}
					onFormUpdate={()=> {}}
				/>
		);
		expect(formList.toJSON()).toMatchSnapshot();
	});

});