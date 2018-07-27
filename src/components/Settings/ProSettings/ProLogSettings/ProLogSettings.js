import React from 'React';
import propTypes from 'prop-types';
import classNames from 'classnames'

/**
 * Create the global form settings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export const ProLogSettings = (props) => {
	return(
		<div
			className={classNames(props.className,ProLogSettings.classNames.wrapper)}
		>
			ProLogSettings
		</div>
	)
};

/**
 * Prop types for the GlobalForms settings component
 * @type {{}}
 */
ProLogSettings.propTypes = {
	classNames: propTypes.string
};

/**
 * Default props for the GlobalForms settings component
 * @type {{}}
 */
ProLogSettings.defaultProps = {

}

/**
 * Class names used in the GlobalForms settings component
 * @type {{wrapper: string}}
 */
ProLogSettings.classNames = {
	wrapper: 'caldera-forms-global-form-settings'
}