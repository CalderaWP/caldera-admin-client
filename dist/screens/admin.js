'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _AdminSlot = require('./admin/AdminSlot');

var _AdminSlot2 = _interopRequireDefault(_AdminSlot);

var _FormsSlot = require('./admin/FormsSlot');

var _FormsSlot2 = _interopRequireDefault(_FormsSlot);

var _EntryViewerSlot = require('./admin/EntryViewerSlot');

var _EntryViewerSlot2 = _interopRequireDefault(_EntryViewerSlot);

var _SettingsSlot = require('./admin/SettingsSlot');

var _SettingsSlot2 = _interopRequireDefault(_SettingsSlot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	AdminSlot: _AdminSlot2.default,
	FormSlot: _FormsSlot2.default,
	EntryViewerSlot: _EntryViewerSlot2.default,
	SettingsSlot: _SettingsSlot2.default
};