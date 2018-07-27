import React from 'React';
import propTypes from 'prop-types';
import classNames from 'classnames'

/**
 * Create the global form settings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export const GlobalFormSettings = (props) => {
	return(
		<div
			className={classNames(props.className,GlobalFormSettings.classNames.wrapper)}
		>
			GlobalFormSettings
		</div>
	)
};

/**
 * Prop types for the GlobalForms settings component
 * @type {{}}
 */
GlobalFormSettings.propTypes = {
	classNames: propTypes.string
};

/**
 * Default props for the GlobalForms settings component
 * @type {{}}
 */
GlobalFormSettings.defaultProps = {

}

/**
 * Class names used in the GlobalForms settings component
 * @type {{wrapper: string}}
 */
GlobalFormSettings.classNames = {
	wrapper: 'caldera-forms-global-form-settings'
}