import {store,state} from '@caldera-labs/state'

/**
 * Selectors from state to use with mapStateToProps
 * @param currentState
 * @return {{forms: *, getForms: (function(): *), getForm: (function(*=): *)}}
 */
export const selectors = (currentState ) => {
	const formState = currentState[state.CALDERA_FORMS_STORE_SLUG];
	return {
		forms:store.selectors.getForms(formState),
		getForms: () => store.selectors.getForms(formState),
		getForm: (formId) => store.selectors.getForm(formState,formId),

	};
};