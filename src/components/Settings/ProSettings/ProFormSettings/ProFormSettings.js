import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames'

/**
 * Create the global form settings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export const ProFormSettings = (props) => {
	return(
		<div
			className={classNames(props.className,ProFormSettings.classNames.wrapper)}
		>
			ProFormSettings
		</div>
	)
};

/**
 * Prop types for the GlobalForms settings component
 * @type {{}}
 */
ProFormSettings.propTypes = {
	classNames: propTypes.string
};

/**
 * Default props for the GlobalForms settings component
 * @type {{}}
 */
ProFormSettings.defaultProps = {

}

/**
 * Class names used in the GlobalForms settings component
 * @type {{wrapper: string}}
 */
ProFormSettings.classNames = {
	wrapper: 'caldera-forms-global-form-settings'
}