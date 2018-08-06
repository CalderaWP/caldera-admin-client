import CalderaFormsAdmin from './CalderaFormsAdmin'
import {compose} from '@wordpress/compose';
import {withSelect,withDispatch} from '@wordpress/data';
import {store} from "@caldera-labs/state";
import {CALDERA_FORMS_ADMIN_STORE } from "./store";
import {PRO_SETTINGS} from "./components/Settings/ProSettings/proSettingsType";
import {GENERAL_SETTINGS} from "./components/Settings/GeneralSettings/generalSettingsType";



/**
 * Create selector functions
 * @param {Object} select
 * @return {{forms: *}}
 */
export const selectors = (select ) => {
	const {
		getForm,
		getForms,
		getFormPreview,
		getFormPreviews,
		getFormPrivacySettings,
		getStyleIncludes,
		getOtherSettings,
		getCfProFormSetting,
		getCfProSettings,
		getPageOfEntries
	} = select(CALDERA_FORMS_ADMIN_STORE);

	const settings = {
		...getStyleIncludes(),
		...getOtherSettings()
	};
	return {
		settings: {
			[PRO_SETTINGS]: getCfProSettings(),
			[GENERAL_SETTINGS]: settings
		},
		forms: getForms(),
		getForm,
		getForms,
		getFormPreview,
		getFormPreviews,
		getCfProFormSetting,
		getPageOfEntries,
		getFormPrivacySettings
	}
};

/**
 * Create dispatch action functions
 * @param dispatch
 */
export const dispatchers = (dispatch) => {
	const {selectors} = store;
	let dispatches = {};
	Object.keys(selectors).forEach(selectorKey => {
		dispatches[selectorKey]=selectors[selectorKey];
	});
	return {dispatches} = dispatch( CALDERA_FORMS_ADMIN_STORE);
};

/**
 * Main admin component wrapped in state
 */
export const CfAdminWithState =  compose(
	withSelect(select => {
		return selectors(select);
	}),
	withDispatch(dispatch => {
		return dispatchers(dispatch);
	})
)(CalderaFormsAdmin);