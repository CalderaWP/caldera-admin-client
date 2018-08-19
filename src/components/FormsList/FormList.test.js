import renderer from "react-test-renderer";
import {FormList} from "./FormList";
import React from 'react';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const formOne = {
	ID: 'cf1',
	name: 'Form One',
	editLink: '/foo/bar',

};

const formWithEntries = {
	ID: 'cf2',
	name: 'Form Two',
	editLink: '/foo/bar/2',
	entries: {
		count: 42
	}
}

describe('Form List component', () => {
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

	it('Passes form ID to openEntryViewerForForm ', () => {
		let id = '';
		const component = mount(
			<FormList
				forms={[formWithEntries]}
				onFormUpdate={()=> {}}
				openEntryViewerForForm={(formID)=> {
					id = formID;
				}}
			/>
		);

		component.find( '.view-entry-button').simulate('click');
		expect(id).toEqual(formWithEntries.ID);
	});



});