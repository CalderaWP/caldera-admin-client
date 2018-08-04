import {optionFactory} from "../../util/optionFactory";

export const PUBLIC_KEY = 'proPublicKey';
export const PRIVATE_KEY = 'propPrivateKey';
export const ENHANCED_DELIVERY = 'enhancedDelivery';
export const LOG_LEVEL = 'logLevel';
export const GENEREATE_PDFS = 'generatePDFs';
export const PRO_API_KEYS = 'apiKeys';
export const PRO_GENERAL_SETTINGS = 'generalSettings';
export const PRO_FORM_SETTINGS = 'formSettings';


export default {

	[PRO_API_KEYS]: [
		{
			id: PUBLIC_KEY,
			label: 'Public Key',
			desc: 'Public Key For Caldera FormsSlot Pro',
			type: 'text',
			path: 'apiKeys.public',
		},
		{
			id: PRIVATE_KEY,
			label: 'Private Key',
			desc: 'Private Key For Caldera FormsSlot Pro',
			path: 'apiKeys.secret',
			type: 'text',
			options: [
				{
					label: 'yes',
					value: 'on'
				}
			]
		},
	],
	[PRO_GENERAL_SETTINGS]: [
		{
			id: ENHANCED_DELIVERY,
			label: 'Enable Enhanced Delivery',
			desc: 'If enabled, messages are sent via Caldera FormsSlot Pro Servers',
			type: 'checkbox',
			path: 'generalSettings.enhancedDelivery',
		},
		{
			id: LOG_LEVEL,
			label: 'Minimum Log Level',
			desc: 'Setting a higher level than notice may affect performance, and should only be used when instructed by support.',
			type: 'select',
			path: 'generalSettings.logLevel',
			options: [
				optionFactory(
					100,
					'DEBUG'
				),
				optionFactory(
					200,
					'INFO'
				),
				optionFactory(
					300,
					'WARNING'
				),
				optionFactory(
					400,
					'ERROR'
				),
				optionFactory(
					500,
					'ALERT'
				),
				optionFactory(
					600,
					'EMERGENCY'
				),
			]
		},
	],
	[PRO_FORM_SETTINGS]: [

	]
};





