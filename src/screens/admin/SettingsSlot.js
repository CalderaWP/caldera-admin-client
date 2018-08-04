import React from 'react';
import Toolbar from './Toolbar';
import Viewer from './Viewer';
import AdminSlot from "./AdminSlot";
import {collectionTypes} from "../../types";
import {Settings} from "../../components/Settings/Settings";
import PropTypes from 'prop-types';

/**
 * Container for SettingsSlot UI in main admin screen
 */
export default class SettingsSlot extends AdminSlot {

	render() {
		const {forms,onCreateForm} = this.props;

		return (
			<div>
				<Toolbar.NavBar
					label="Settings"
					onActive={this.handleActive}
					onDeactive={this.handleDeactive}
					isActive={this.state.active}
				/>
				{this.state.active &&
				<div>

					<Viewer.Content>
						Settings
					</Viewer.Content>

				</div>
				}
			</div>
		);
	}


}


SettingsSlot.propTypes = {
	forms: collectionTypes.formsType,
	settings: collectionTypes.settingsType,
};
SettingsSlot.defaultProps = {
	forms: {},
	settings: {}
};