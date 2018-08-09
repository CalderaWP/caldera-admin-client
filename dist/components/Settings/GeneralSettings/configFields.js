'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CDN_ENABLE = exports.STYLE_ALERT = exports.STYLE_GRID = exports.STYLE_FORM = undefined;

var _optionFactory = require('../../util/optionFactory');

var STYLE_FORM = exports.STYLE_FORM = 'SETTINGS/STYLE_INCLUDES/FORM';
var STYLE_GRID = exports.STYLE_GRID = 'SETTINGS/STYLE_INCLUDES/FORM';
var STYLE_ALERT = exports.STYLE_ALERT = 'SETTINGS/STYLE_INCLUDES/STYLE_ALERT';
var CDN_ENABLE = exports.CDN_ENABLE = 'SETTINGS/CDN';
var enableOption = (0, _optionFactory.optionFactory)(true, 'Enable');
exports.default = [{
	id: STYLE_FORM,
	label: 'Form Styles',
	desc: 'Includes Bootstrap 3 styles on the frontend for form fields and buttons',
	type: 'checkbox',
	path: 'styleIncludes.form',
	options: [enableOption]
}, {
	id: STYLE_ALERT,
	label: 'Alert Styles',
	desc: 'Includes Bootstrap 3 styles on the frontend for form alert notices',
	type: 'checkbox',
	path: 'styleIncludes.alert',
	options: [enableOption]
}, {
	id: STYLE_GRID,
	label: 'Grid',
	desc: 'Includes Bootstrap 3 styles on the frontend for form grid layouts',
	type: 'checkbox',
	path: 'styleIncludes.grid',
	options: [enableOption]
}, {
	id: CDN_ENABLE,
	label: 'Enable Free CDN',
	desc: 'Some usage data will be shared with CDN providers',
	type: 'checkbox',
	path: 'otherSettings.cdnEnable',
	options: [enableOption]
}];