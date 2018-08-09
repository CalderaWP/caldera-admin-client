'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PRO_FORM_PDF_LINK = exports.PRO_FORM_PDF_ATATCH = exports.PRO_FORM_PDF_LAYOUT = exports.PRO_FORM_EMAIL_LAYOUT = exports.PRO_FORM_SEND_LOCAL = undefined;

var _optionFactory = require('../../../util/optionFactory');

var PRO_FORM_SEND_LOCAL = exports.PRO_FORM_SEND_LOCAL = 'SETTINGS/PRO/FORM/SEND_LOCAL';
var PRO_FORM_EMAIL_LAYOUT = exports.PRO_FORM_EMAIL_LAYOUT = 'SETTINGS/PRO/FORM/EMAIL_LAYOUT';
var PRO_FORM_PDF_LAYOUT = exports.PRO_FORM_PDF_LAYOUT = 'SETTINGS/PRO/FORM/PDF_LAYOUT';
var PRO_FORM_PDF_ATATCH = exports.PRO_FORM_PDF_ATATCH = 'SETTINGS/PRO/FORM/PDF_ATTACH ';
var PRO_FORM_PDF_LINK = exports.PRO_FORM_PDF_LINK = 'SETTINGS/PRO/FORM/PDF__LINK';

var enableOption = (0, _optionFactory.optionFactory)(true, 'Enable');

var disableOption = (0, _optionFactory.optionFactory)(false, 'Disable');

var enableDiable = [enableOption, disableOption];
exports.default = [{
	id: PRO_FORM_SEND_LOCAL,
	label: 'Disable enhanced delivery for this form',
	type: 'checkbox',
	path: 'pro.send_local',
	options: [enableDiable]
}, {
	id: PRO_FORM_EMAIL_LAYOUT,
	label: 'Email Layout',
	type: 'dropdown',
	path: 'pro.layout',
	options: []
}, {
	id: PRO_FORM_PDF_LAYOUT,
	label: 'PDF Layout',
	type: 'dropdown',
	path: 'pro.pdf_layout'
}, {
	id: PRO_FORM_PDF_ATATCH,
	label: 'Attach PDF To Main Mailer',
	type: 'checkbox',
	path: 'pro.attach_pdf',
	options: [enableDiable]
}, {
	id: PRO_FORM_PDF_LINK,
	label: 'Add PDF Link',
	type: 'checkbox',
	path: 'pro.pdf_link',
	options: [enableDiable]
}];