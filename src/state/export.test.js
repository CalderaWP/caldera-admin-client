import adminState from './index';
const {dispatchers,selectors} = adminState;

describe( 'admin state export', () => {
	it( 'exports dispatchers', () => {
		expect( typeof dispatchers ).toBe( 'function' );
	});
	it( 'exports selectors', () => {
		expect( typeof selectors ).toBe( 'function' );
	});
});