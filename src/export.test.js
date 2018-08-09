import admin from './module'
describe( 'module export', () => {
	it( 'includes the main component', () => {
		expect( typeof admin.CalderaAdmin ).toBe('function');
	});

	it( 'includes the wrapped component', () => {
		expect( typeof admin.CalderaAdminWithState ).toBe('function');
	});

	it( 'includes the store slug', () => {
		expect( typeof admin.CALDERA_FORMS_ADMIN_STORE ).toBe('string');
	});
	it( 'includes the store ', () => {
		expect( typeof admin.store ).toBe('object');
	});
});