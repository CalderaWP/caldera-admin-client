import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import {TabPanel} from '@wordpress/components';
import configFields from './configFields'
import {RenderGroup} from '@caldera-labs/components'
import {pick,object} from 'dot-object'
import {proLocalSettingsFactory} from "../factories";

/**
 * Create the CF Pro settings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export class ProSettings extends React.PureComponent {

	/**
	 * Create ProSettings component
	 * @param props
	 */
	constructor(props) {
		super(props);
		this.state = {
			proSettings: proLocalSettingsFactory(props.proSettings)
		};
		this.onSettingsChange = this.onSettingsChange.bind(this);
		this.getConfigFields = this.getConfigFields.bind(this);
		this.onSettingsSave = this.onSettingsSave.bind(this);
		this.tabContentAreaConnected = this.tabContentAreaConnected.bind(this);
	}

	/**
	 * Save the settings
	 */
	onSettingsSave() {
		this.props.onSettingsSave(this.state.proSettings);
	}

	/**
	 * Update state when settings change
	 *
	 * @param {Object} proSettings
	 */
	onSettingsChange(proSettings) {
		this.setState({proSettings});
	}

	/**
	 * Prepare config fields, based on current tab
	 *
	 * @param {String} tabName
	 * @return {Array}
	 */
	getConfigFields(tabName) {
		let currentConfigFields = this.props.configFields[tabName];
		currentConfigFields.forEach(configField => {
			const {path} = configField;
			configField.value = pick(
				path,
				this.state.proSettings
			);

			configField.onValueChange = (newValue) => {
				const update = {
					...this.state.proSettings,
					[path]:newValue
				};
				this.onSettingsChange(object(update));
			};

		});
		return currentConfigFields;
	};

	/**
	 * Renderer for tab content area used when CF Pro is connected
	 * @param tabName
	 * @return {*}
	 */
	tabContentAreaConnected(tabName) {
		return (
			<RenderGroup
				configFields={this.getConfigFields(tabName)}
			/>
		);
	}

	/**
	 * Render the ProSettings UI
	 * @return {*}
	 */
	render() {
		const {connected} = this.state.proSettings;
		let tabs = [

			{
				name: 'apiKeys',
				title: 'Api Keys',
				className: 'pro-settings',
			},
			{
				name: 'generalSettings',
				title: 'Caldera Forms Pro Settings',
				className: 'pro-settings',
			},
			{
				name: 'formSettings',
				title: 'Form Settings',
				className: 'pro-form-settings',
			},
		];
		if( ! connected ){
			tabs = [

				{
					name: 'apiKeys',
					title: 'Api Keys',
					className: 'pro-settings',
				},
				{
					name: 'generalSettings',
					title: 'Caldera Forms Pro Settings',
					className: 'pro-settings',
				},
				{
					name: 'formSettings',
					title: 'Form Settings',
					className: 'pro-form-settings',
				},
			]
		}

		return (
			<TabPanel
				className={classNames(this.props.className, ProSettings.classNames.wrapper)}
				orientation={'vertical'}
				tabs={tabs}
			>
				{
					(tabName) => {
						if( connected ){
							return this.tabContentAreaConnected(tabName);

						}
					}
				}
			</TabPanel>
		)
	}


};

/**
 * Prop types for the ProSettings settings component
 * @type {{}}
 */
ProSettings.propTypes = {
	classNames: PropTypes.string,
	proSettings: PropTypes.object,
	onSettingsSave: PropTypes.func.isRequired,
	configFields: PropTypes.object
};

/**
 * Default props for the ProSettings settings component
 * @type {{}}
 */
ProSettings.defaultProps = {
	configFields
};

/**
 * Class names used in the ProSettings settings component
 * @type {{wrapper: string}}
 */
ProSettings.classNames = {
	wrapper: 'caldera-forms-pro-settings'
};