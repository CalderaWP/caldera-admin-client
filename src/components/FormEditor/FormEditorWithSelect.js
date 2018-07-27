import React from 'react';
import {withSelect} from "@wordpress/data";
import {state} from '@caldera-labs/state';
import {FormEditor} from "./FormEditor";

/**
 * Main form editor component wrapped in form selector
 */
export const FormEditorWithSelect = withSelect((select, ownProps ) => {
	const { getForm } = select(state.CALDERA_FORMS_STORE_SLUG);
	const {formId} = ownProps;
	return {
		...ownProps,
		form: getForm(formId)
	};
})(FormEditor);