import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import configFields, {CDN_ENABLE, STYLE_ALERT, STYLE_FORM, STYLE_GRID} from './configFields'
import {RenderGroup} from '@caldera-labs/components';
import {Button} from '@wordpress/components'
import {object, pick} from "dot-object";

/**
 * Default values for style includes settings
 * @type {{[p: string]: boolean}}
 */
const styleIncludesDefaults = {

	[STYLE_FORM]: true,
	[STYLE_ALERT]: true,
	[STYLE_GRID]: true,

};

/**
 * Default values for other settings
 * @type {{[p: string]: boolean}}
 */
const otherSettingsDefaults = {
	[CDN_ENABLE]: false
};
/**
 * Create the global form settings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export class GlobalFormSettings extends React.PureComponent {
	constructor(props){
		super(props);
		this.state = {
			styleIncludes: {
				...styleIncludesDefaults,
				...props.styleIncludes
			},
			otherSettings: {
				...otherSettingsDefaults,
				...props.otherSettings
			}
		}
	}

	/**
	 * Save the settings
	 */
	onSettingsSave() {
		this.props.onSettingsSave({
			generalSettings: this.state
		});
	}

	/**
	 * Update state when settings change
	 *
	 * @param {Object} update
	 */
	onSettingsChange(update) {
		this.setState(update);
	}

	/**
	 * Prepare config fields
	 *
	 * @return {Array}
	 */
	getConfigFields() {
		let currentConfigFields = this.props.configFields;
		currentConfigFields.forEach(configField => {
			const {path} = configField;
			configField.value = pick(
				path,
				this.state
			);

			configField.onValueChange = (newValue) => {
				const update = {
					...this.state,
					[path]:newValue
				};
				this.onSettingsChange(object(update));
			};

		});
		return currentConfigFields;
	};

	render(){
		return(
			<div
				className={classNames(
					this.props.className,
					GlobalFormSettings.classNames.wrapper
				)}
			>
				<RenderGroup
					configFields={this.props.configFields}
				/>
				<Button
					onClick={this.props.onSettingsSave}
				/>
			</div>
		)
	}



};

/**
 * Prop types for the GlobalForms settings component
 * @type {{}}
 */
GlobalFormSettings.propTypes = {
	classNames: PropTypes.string,
	onSettingsSave: PropTypes.func.isRequired,
	styleIncludes: PropTypes.object,
	otherSettings: PropTypes.object
};



/**
 * Default props for the GlobalForms settings component
 * @type {{}}
 */
GlobalFormSettings.defaultProps = {
	configFields,
	styleIncludes: styleIncludesDefaults,
	otherSettings: otherSettingsDefaults
};



/**
 * Class names used in the GlobalForms settings component
 * @type {{wrapper: string}}
 */
GlobalFormSettings.classNames = {
	wrapper: 'caldera-forms-global-form-settings'
}