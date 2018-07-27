import React from 'React';
import propTypes from 'prop-types';
import classNames from 'classnames'

/**
 * Create the global form settings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export const ProSettings = (props) => {
	return(
		<div
			className={classNames(props.className,ProSettings.classNames.wrapper)}
		>
			ProSettings
		</div>
	)
};

/**
 * Prop types for the GlobalForms settings component
 * @type {{}}
 */
ProSettings.propTypes = {
	classNames: propTypes.string
};

/**
 * Default props for the GlobalForms settings component
 * @type {{}}
 */
ProSettings.defaultProps = {

}

/**
 * Class names used in the GlobalForms settings component
 * @type {{wrapper: string}}
 */
ProSettings.classNames = {
	wrapper: 'caldera-forms-global-form-settings'
}