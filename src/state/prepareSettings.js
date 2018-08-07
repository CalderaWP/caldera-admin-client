import {GENERAL_SETTINGS} from "../components/Settings/GeneralSettings/generalSettingsType";
import {PRO_SETTINGS} from "../components/Settings/ProSettings/proSettingsType";
import {prepareProSettings} from "../components/Settings/ProSettings/prepareProSettings";
import {prepareGeneralSettings} from "../components/Settings/GeneralSettings/prepareGeneralSettings";


export const settingsProp = (settings,prop,defaultValue) =>{
	return settings.hasOwnProperty(prop) ? settings[prop] : defaultValue;
}

export const prepareSettings = (settings) => {
	return {
		[GENERAL_SETTINGS]: prepareGeneralSettings(
			settingsProp(settings,'styleIncludes',{}),
			settingsProp(settings,'otherSettings',{}),
		),
		[PRO_SETTINGS]: prepareProSettings(
			settingsProp(settings,PRO_SETTINGS,{})
		),
		privacySettings : {

		}
	}

};