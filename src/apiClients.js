/*global CF_ADMIN*/
/*eslint no-undef: "error"*/
import {wpClientFactory} from '@caldera-labs/api-client';

export const cfAdmin = {
	rest: {
		nonce: 'object' === typeof  CF_ADMIN  ? CF_ADMIN.rest.nonce: 'theNonce',
		root: 'object' === typeof  CF_ADMIN  ? CF_ADMIN.rest.root:'./__MOCK_DATA__/cf-api'
	},
	templates: 'object' === typeof  CF_ADMIN  ? CF_ADMIN.templates: {},
};

/**
 * 1 instance of forms client
 *
 * @type {FormsClient}
 */
export const formsAdminApiClient = wpClientFactory(
	cfAdmin.rest.root,
	cfAdmin.rest.nonce,
	'forms'
);

/**
 * 1 instance of privacy settings client
 *
 * @type {PrivacySettingsClient}
 */
export const privacySettingsClient = wpClientFactory(
	cfAdmin.rest.root,
	cfAdmin.rest.nonce,
	'privacy'
);
