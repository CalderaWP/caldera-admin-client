import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames'

export const Settings = (props) => {
	return (
		<div
			className={
				classNames(Settings.classNames.wrapper,props.classNames)
			}
		>
			Settings
		</div>
	)
};

Settings.propTypes = {
	classNames: propTypes.string
};

/**
 * Default props for the Settings component
 * @type {{}}
 */
Settings.defaultProps = {

}

/**
 * Class names used in the Settings component
 * @type {{wrapper: string}}
 */
Settings.classNames = {
	wrapper: 'caldera-forms-global-settings'
};