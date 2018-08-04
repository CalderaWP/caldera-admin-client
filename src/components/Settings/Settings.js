import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import {TabPanel} from '@wordpress/components';
import {ProSettings} from "./ProSettings/ProSettings";
import {GeneralSettings} from "./GeneralSettings/GeneralSettings";
import deepmerge from 'deepmerge';

/**
 * Creates the UI for Caldera Forms global settings
 */
export class Settings extends React.PureComponent {

	/**
	 * Create Settings componet
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.onSelect = this.onSelect.bind(this);
		this.onSettingsSave = this.onSettingsSave.bind(this);
	}

	/**
	 * Dispatch current tabName when tabs change
	 * @param tabName
	 */
	onSelect(tabName) {
		this.props.onTabSelect(tabName)
	};

	/**
	 * Dispatches settings to parent on save
	 * @param update
	 */
	onSettingsSave(update) {
		this.props.onSettingsSave(deepmerge({
			generalSettings: this.props.generalSettings,
			proSettings: this.props.proSettings
		}, update));
	};

	/**
	 * Creat main Caldera Forms settings UI
	 * @return {*}
	 */
	render() {
		return (
			<TabPanel
				orientation={'horizontal'}
				className={
					classNames(Settings.classNames.wrapper, this.props.classNames)
				}
				activeClass={
					classNames(Settings.classNames.active)
				}
				onSelect={this.onSelect}
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
						name: 'generalSettings',
						title: 'Global Form Settings',
						className: 'global-form-settings',
					},
				]}
			>
				{
					(tabName) => {
						switch (tabName) {
							case 'generalSettings':
								return (
									<GeneralSettings
										onSettingsChange={(generalSettings) => {
											this.onSettingsSave({generalSettings});
										}}
									/>
								);
							case 'proSettings':
							default:
								return (
									<ProSettings
										onSettingsSave={(proSettings) => {
											this.onSettingsSave({proSettings})
										}}
									/>
								)
						}
					}
				}
			</TabPanel>
		);
	}
};

/**
 * Prop definitions for Settings component
 *
 * @type {{classNames: shim, onTabSelect: *, proSettings: shim, generalSettings: shim, onSettingsSave: shim}}
 */
Settings.propTypes = {
	classNames: PropTypes.string,
	onTabSelect: PropTypes.func.isRequired,
	proSettings: PropTypes.object,
	generalSettings: PropTypes.object,
	onSettingsSave: PropTypes.func
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