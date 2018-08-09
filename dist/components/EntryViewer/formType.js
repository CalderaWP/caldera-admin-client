'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.nameType = exports.idType = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);
var idType = exports.idType = stringOrNumber;

var nameType = exports.nameType = _propTypes2.default.string.isRequired;

exports.default = {
	ID: idType,
	name: nameType,
	fields: _propTypes2.default.shape({
		ID: stringOrNumber,
		name: _propTypes2.default.string,
		type: _propTypes2.default.string
	}),
	emailIdentifyingFields: _propTypes2.default.array,
	piiFields: _propTypes2.default.array,
	privacyExporterEnabled: _propTypes2.default.bool,
	field_details: _propTypes2.default.shape({
		order: _propTypes2.default.shape({
			id: idType,
			label: _propTypes2.default.string
		}),
		entry_list: _propTypes2.default.shape({
			//id: idType,
			label: _propTypes2.default.string
		})
	}),
	mailer: _propTypes2.default.shape({
		active: _propTypes2.default.bool
	}),
	entries: _propTypes2.default.shape({
		count: stringOrNumber
	})
};