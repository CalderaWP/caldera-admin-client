import propTypes from 'prop-types'

/**
 * Prop type definitions for the FormEditor component
 *
 * @type {{form: shim, formId: (boolean|*), onFormUpdate: (boolean|*)}}
 */
export const formEditorPropTypes = {
	form: propTypes.object,
	formId: propTypes.string.isRequired,
	onFormUpdate: propTypes.func.isRequired,
};

