import {store} from '@caldera-labs/state'

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
			)
		},
		setForms: (forms) => {
			dispatch(
				store.actions.setForms(forms)
			)
		},
		newForm: () => {
			dispatch(
				store.actions.newForm()
			)
		}
	};
};