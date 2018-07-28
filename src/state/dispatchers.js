import {store} from '@caldera-labs/state';

/**
 * Dispatch action functions for use with mapDispatchToProps
 * @param dispatch
 * @return {{setForm: setForm, setForms: setForms, newForm: newForm}}
 */
export const dispatchers = (dispatch) => {
	return {
		setForm: (form) => {
			dispatch(
				store.actions.setForm(form)
			);
		},
		setForms: (forms) => {
			dispatch(
				store.actions.setForms(forms)
			);
		},
		newForm: () => {
			dispatch(
				store.actions.newForm()
			);
		},
		setEditForm: (formId) => {
			dispatch(
				store.actions.setEditForm(formId)
			);
		},
		unsetEditForm: () => {
			dispatch(
				store.actions.unsetEditForm()
			);
		},
		addFormPreview: (formsId,preview) => {
			dispatch(
				store.actions.addFormPreview(formsId,preview)
			);
		},
		setFormPrivacyForm: (settings) => {
			dispatch(
				store.actions.setFormPrivacyForm(settings)
			);
		},
		updateStyleIncludes: (styleIncludes) => {
			dispatch(
				store.actions.updateStyleIncludes(styleIncludes)
			);
		},
		updateOtherSettings:(settingsOther) => {
			dispatch(
				store.actions.updateOtherSettings(settingsOther)
			);
		},
		updateCfProFormSetting: (formId, settings) => {
			dispatch(
				store.actions.updateCfProFormSetting(formId, settings)
			);
		},
		updateCfProSettings: (settings) => {
			dispatch(
				store.actions.updateCfProSettings( settings)
			);
		}

	};
};