import {formsAdminApiClient,privacySettingsClient} from "./apiClients";
import * as calderaApiClient from '@caldera-labs/api-client';
import {cfAdmin} from "./apiClients";

describe('FormsSlot client', () => {
	it('Works with mock data', () => {
		const FakeFormsClient = calderaApiClient.wpClientFactory(
			'./__MOCK_DATA__/cf-api',
			'theNonce',
			'forms'
		);

		expect(FakeFormsClient.urlFromEndpoint(
			FakeFormsClient.getFormsEndpoint()
		)).toBe('./__MOCK_DATA__/cf-api/forms?');
	});

	it('Has the right root route', () => {
		expect(formsAdminApiClient.route).toBe('./__MOCK_DATA__/cf-api');
	});


});

describe('Privacy client', () => {

	it('Has the right root route', () => {
		expect(privacySettingsClient.route).toBe('./__MOCK_DATA__/cf-api');
	});

});

describe('cfAdmin Templates list', () => {

	it('Has an object of templates', () => {
		expect(typeof cfAdmin.templates).toBe('object');
		expect(Array.isArray(cfAdmin.templates)).toBe(false);
	});

});