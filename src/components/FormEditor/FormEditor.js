import React from 'react';
import {formEditorPropTypes} from "./propTypes";

/**
 * The main container component for the FormEditor
 *
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export const FormEditor = (props) => {
	return (
		<div>{props.form.ID}</div>
	);
};

FormEditor.propTypes = formEditorPropTypes;
