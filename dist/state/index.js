'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _prepareSettings = require('./prepareSettings');

var _resolvers = require('./resolvers');

var _templatesStore = require('./templates-store');

/**
 * Export all state-related functions
 */
exports.default = {
	prepareSettings: _prepareSettings.prepareSettings,
	settingsProp: _prepareSettings.settingsProp,
	resolvers: _resolvers.resolvers,
	formTemplateReducer: _templatesStore.formTemplateReducer
};