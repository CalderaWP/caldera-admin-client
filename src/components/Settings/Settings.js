import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import {TabPanel} from '@wordpress/components';
import {ProSettings} from "./ProSettings/ProSettings";

export const Settings = (props) => {
	const onSelect = (tabName) => {
		props.onTabSelect(tabName)
	};

	return (

		<TabPanel
			orientation={'horizontal'}
			className={
				classNames(Settings.classNames.wrapper, props.classNames)
			}
			activeClass={
				classNames(Settings.classNames.active)
			}
			onSelect={onSelect}
			tabs={[

				{
					name: 'proSettings',
					title: 'Caldera Forms Pro',
					className: 'pro-settings',
				},
				{
					name: 'privacySettings',
					title: 'Privacy Settings',
					className: 'privacy-settings',
				},
				{
					name: 'globalFormSettings',
					title: 'Global Form Settings',
					className: 'global-form-settings',
				},
			]}
		>
			{
				(tabName) => {
					switch( tabName ){
						case 'proSettings':
						default:
							return (
								<ProSettings
								/>
							)
					}


				}
			}
		</TabPanel>
	)
};

Settings.propTypes = {
	classNames: PropTypes.string,
	onTabSelect: PropTypes.func.isRequired,
	proSettings: PropTypes.object
};

/**
 * Default props for the Settings component
 * @type {{}}
 */
Settings.defaultProps = {}

/**
 * Class names used in the Settings component
 * @type {{wrapper: string}}
 */
Settings.classNames = {
	wrapper: 'caldera-forms-global-settings',
	active: 'caldera-forms-settings-tab-active'
};