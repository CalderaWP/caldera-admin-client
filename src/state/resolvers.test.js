import {resolvers} from './resolvers';

describe( 'resolvers', () => {
	it( 'has functions', () => {
		expect( typeof resolvers.getForm ).toBe( 'function');
		expect( typeof resolvers.getForms ).toBe( 'function');
		expect( typeof resolvers.getFormPreview ).toBe( 'function');
		expect( typeof resolvers.getFormPrivacySettings ).toBe( 'function');
		expect( typeof resolvers.getStyleIncludes ).toBe( 'function');
		expect( typeof resolvers.getOtherSettings ).toBe( 'function');
		expect( typeof resolvers.getCfProFormSetting ).toBe( 'function');
		expect( typeof resolvers.getPageOfEntries ).toBe( 'function');
	});
});
