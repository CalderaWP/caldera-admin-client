import {prepareColumnData,prepareRowData} from "./util";
import {EntryViewer} from "./EntryViewer";
import renderer from "react-test-renderer";
import React from 'react';
import {shallow,mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const columns = [
	prepareColumnData({
		id: 'one',
		Header: 'One'
	}),
	prepareColumnData({
		id: 'two',
		Header: 'Two'
	})
];

const valueOne = {
	id: 'one',
	value: 1
};
const rowOne = [
	valueOne,
	{
		id: 'two',
	}
];
describe( 'utility functions', () => {
	describe( 'column preparation', () => {
		it( 'adds missing keys',() => {
			expect( prepareColumnData({}).hasOwnProperty('id') ).toBe(true);
			expect( prepareColumnData({}).hasOwnProperty('Header') ).toBe(true);
		});

		it( 'uses passed values ',() => {
			expect( prepareColumnData({id:1}).id ).toBe(1);
			expect( prepareColumnData({Header: 'Roy'}).Header).toBe('Roy');
		});

		it( 'adds generic accessor ',() => {
			expect( typeof prepareColumnData({id:'h'}).accessor ).toBe('function');
		});

		it.skip( 'adds a generic accessor that works with prepareRowData data', () => {
			expect(  prepareColumnData({id:'h'}).accessor({h:4}) ).toBe(4);

		});

		it( 'converts label to Header', () => {
			expect(  prepareColumnData({label:'First Name'}).Header ).toBe('First Name');

		});

	});

	describe( 'rows', () => {
		const rows = [
			{id: "id", value: "31"},
			{id: "datestamp", value: "2018-07-07 21:12:03"},
			{id: "fld_8768091", value: "Roy"},

		];

		const columns  = [
			{Header: "ID", id: "id", accessor: 'id'},
			{Header: "Submitted", id: "datestamp", accessor: 'datestamp' }
		]



		it( 'removes invalid rows', () => {
			expect(prepareRowData([
				rows
			], columns).length).toBe(1);
		});





	});
});
describe( 'Entry Viewer component', () => {
	it('matches snapshot', () => {
		expect( renderer.create(<EntryViewer
			rows={ [
				rowOne
			]}
			columns={columns}

		/>).toJSON() ).toMatchSnapshot();
	});


	it('Has min rows no greater than page size', () => {
		const component = shallow(<EntryViewer
			rows={ [
				rowOne,
				rowOne
			]}
			columns={columns}
			defaultPageSize={1}
		/>);

		expect(component.instance().minRows() ).toEqual(1);
	});

	it('Has min rows no greater than number of rows', () => {
		const component = shallow(<EntryViewer
			rows={ [
				rowOne,
				rowOne
			]}
			columns={columns}
			defaultPageSize={10}
		/>);

		expect(component.instance().minRows() ).toEqual(2);
	});



});