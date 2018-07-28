import {optionFactory} from "./optionFactory";
describe( 'optionFactory ', () => {
	const value = 1;
	const label = 'One';
	it( 'creates value-label', () => {
		expect( optionFactory(value,label) ).toEqual( {
			value,
			label
		});
	});

	it( 'Uses value as label if label is not provided', () => {
		expect( optionFactory(value) ).toEqual( {
			value,
			label:value
		});
	});

	it( 'Passes the extra options', () => {
		expect( optionFactory(value,label,{mike: 'roy'}) ).toEqual( {
			value,
			label,
			mike: 'roy'
		});
	});

	it( 'Extra options does not set value or label', () => {
		expect( optionFactory(value,label,{
			mike: 'roy',
			label: 'Pancakes',
			value: 'pans'

		}) ).toEqual( {
			value,
			label,
			mike: 'roy'
		});
	});
});