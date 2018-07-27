import React from 'React';
import propTypes from 'prop-types';
import classNames from 'classnames'

/**
 * Create the global form settings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export const ProApiKeys = (props) => {
	return(
		<div
			className={classNames(props.className,ProApiKeys.classNames.wrapper)}
		>
			ProApiKeys
		</div>
	)
};

/**
 * Prop types for the GlobalForms settings component
 * @type {{}}
 */
ProApiKeys.propTypes = {
	classNames: propTypes.string
};

/**
 * Default props for the GlobalForms settings component
 * @type {{}}
 */
ProApiKeys.defaultProps = {

}

/**
 * Class names used in the GlobalForms settings component
 * @type {{wrapper: string}}
 */
ProApiKeys.classNames = {
	wrapper: 'caldera-forms-global-form-settings'
}