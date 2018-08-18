import apiClients from '../apiClients';

const {
	formsAdminApiClient,
	PrivacySettingsClient,
	GeneralSettingClient,
	ProLocalSettingClient,
	entriesClient
} = apiClients;
export const resolvers = {
	getForm: (formId) => formsAdminApiClient.getForm(formId),
	getForms: (page = 1) => formsAdminApiClient.getForms(page),
	getFormPreview: (formId) => formsAdminApiClient.getFormPreview(formId),
	getFormPrivacySettings: (formId) => PrivacySettingsClient.getSettings(formId),
	getStyleIncludes: async () => {
		const settings = await GeneralSettingClient.getSettings();
		return settings.styleIncludes;
	},
	getOtherSettings: () => async () => {
		const settings = await GeneralSettingClient.getSettings();
		return settings.otherSettings;
	},
	getCfProFormSetting() {
		return {};
	},
	getCfProSettings: () => ProLocalSettingClient.getSettings(),
	getPageOfEntries: (page = 1) => entriesClient.getEntries(page),

};