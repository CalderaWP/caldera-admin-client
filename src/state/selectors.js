import {store, state} from '@caldera-labs/state';

/**
 * Selectors from state to use with mapStateToProps
 * @param currentState
 * @return {{forms: *, getForms: (function(): *), getForm: (function(*=): *)}}
 */
export const selectors = (currentState) => {
	const formState = currentState[state.CALDERA_FORMS_STORE_SLUG];
	const privacyState = currentState[state.CALDERA_FORMS_PRIVACY_STORE_SLUG];
	const cfProState = currentState[state.CALDERA_FORMS_PRO_LOCAL_SETTINGS_SLUG];
	const settingsState = currentState[state.CALDERA_FORMS_SETTINGS_SLUG];
	const forms = store.selectors.getForms(formState);
	return {
		forms: Array.isArray(forms) ? {} : forms,
		getForms: () => store.selectors.getForms(formState),
		getForm: (formId) => store.selectors.getForm(formState, formId),
		getFormPreview: (formId) => store.selectors.getFormPreview(formState, formId),
		getFormPrivacySettings: (formId) => store.selectors.getFormPrivacySettings(formId, privacyState),
		getCfProSettings: () => store.selectors.getCfProSettings(cfProState),
		proSettings: store.selectors.getCfProSettings(cfProState),
		getCfProFormSetting: (formId) => store.selectors.getCfProFormSetting(formId,cfProState),
		getStyleIncludes: () => store.selectors.getStyleIncludes(settingsState),
		getOtherSettings: () => store.selectors.getOtherSettings(settingsState)
	};
};