'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formTemplateReducer = exports.DEFAULT_TEMPLATES = exports.setFormTemplates = exports.SET_FORM_TEMPLATES = exports.CALDERA_FORMS_TEMPLATE_STORE_SLUG = exports.getFormTemplates = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _module = require('@caldera-labs/state/lib/module');

var _apiClients = require('../apiClients');

var CALDERA_FORMS_STORE_SLUG = _module.state.CALDERA_FORMS_STORE_SLUG;

/**
 * Selector to get all form templates
 *
 * @param state
 * @return {shim|*|{starter_contact_form, variable_price_example, registration, simple_booking_form_example}}
 */

var getFormTemplates = exports.getFormTemplates = function getFormTemplates(state) {
  return state.templates;
};

/**
 * Slug for form templates store
 * @type {string}
 */
var CALDERA_FORMS_TEMPLATE_STORE_SLUG = exports.CALDERA_FORMS_TEMPLATE_STORE_SLUG = CALDERA_FORMS_STORE_SLUG + '/TEMPLATES';

/**
 * Name of action indicating that form templates should be set in store
 * @type {string}
 */
var SET_FORM_TEMPLATES = exports.SET_FORM_TEMPLATES = CALDERA_FORMS_TEMPLATE_STORE_SLUG + '/SET_FORM_TEMPLATES';

/**
 * Action to set form templates in store
 * @param {Object} templates
 * @return {{type: string, templates: *}}
 */
var setFormTemplates = exports.setFormTemplates = function setFormTemplates(templates) {
  return {
    type: SET_FORM_TEMPLATES,
    templates: templates
  };
};

/**
 * Default value for form templates store
 */
var DEFAULT_TEMPLATES = exports.DEFAULT_TEMPLATES = _apiClients.cfAdmin.templates;

/**
 * Reducer for form templates
 *
 * @param {Object} state
 * @param {Object} action
 * @return {*}
 */
var formTemplateReducer = exports.formTemplateReducer = function formTemplateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TEMPLATES;
  var action = arguments[1];

  switch (action.type) {
    case SET_FORM_TEMPLATES:
      return _extends({}, state, {
        templates: action.templates
      });
    default:
      if (undefined === state) {
        return {};
      }
      return state;
  }
};

exports.default = {
  formTemplateReducer: formTemplateReducer,
  DEFAULT_TEMPLATES: DEFAULT_TEMPLATES,
  actions: setFormTemplates,
  selectors: getFormTemplates
};