import renderer from "react-test-renderer";
import {Form} from "./Form";
import React from 'react';
import {shallow,mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
const formOne = {
	ID: 'cf1',
	name: 'Form One',
	editLink: '/forms/edit/1'
};

describe('Forms component', () => {

	it('Shows form', () => {
		const formList = renderer.create(
				<Form
					form={formOne}
					onFormUpdate={()=> {}}
					openEntryViewerForForm={()=> {}}
				/>
		);
		expect(formList.toJSON()).toMatchSnapshot();
	});


	it('Passes form ID to openEntryViewerForForm ', () => {
		let id = '';
		const component = mount(
			<Form
				form={{
					...formOne,
					entries: {
						count: 4
					}
				}}
				onFormUpdate={()=> {}}
				openEntryViewerForForm={(formID)=> {
					id = formID;
				}}
			/>
		);

		component.find( '.view-entry-button').simulate('click');
		expect(id).toEqual(formOne.ID);
	});

});