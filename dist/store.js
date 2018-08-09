'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CALDERA_FORMS_ADMIN_STORE = undefined;

var _state = require('@caldera-labs/state');

var CalderaState = _interopRequireWildcard(_state);

var _templatesStore = require('./state/templates-store');

var _data = require('@wordpress/data');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducers = CalderaState.state.reducers;

/**
 * Collection of all admin reducers
 * @type {{}}
 */

var adminReducers = _defineProperty({}, _templatesStore.CALDERA_FORMS_TEMPLATE_STORE_SLUG, _templatesStore.formTemplateReducer);

Object.keys(reducers).forEach(function (reducerKey) {
	adminReducers[reducerKey] = reducers[reducerKey];
});
/**
 * Identifier for Caldera Forms store
 * @type {string}
 */
var CALDERA_FORMS_ADMIN_STORE = exports.CALDERA_FORMS_ADMIN_STORE = 'CALDERA_FORMS_ADMIN_STORE';

var _CalderaState$store = CalderaState.store,
    actions = _CalderaState$store.actions,
    selectors = _CalderaState$store.selectors;

/**
 * Main Redux(-like) store for Caldera Forms Admin
 */

var store = (0, _data.registerStore)(CALDERA_FORMS_ADMIN_STORE, {
	reducer: (0, _data.combineReducers)(adminReducers),
	actions: actions,
	selectors: selectors
});

exports.default = store;