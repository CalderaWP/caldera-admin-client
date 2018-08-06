import React from 'react';
import Toolbar from './Toolbar';
import FormAdminView from './FormAdminView';
import AdminSlot from "./AdminSlot";
import {collectionTypes} from "../../types";
import {Settings} from "../../components/Settings/Settings";

/**
 * Container for SettingsSlot UI in main admin screen
 */
export default class SettingsSlot extends AdminSlot {

	render() {
		const {forms,settings} = this.props;

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

					<FormAdminView.Content>
						<Settings
							onTabSelect={() => {}}
							forms={forms}
							settings={settings}
						/>
					</FormAdminView.Content>

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