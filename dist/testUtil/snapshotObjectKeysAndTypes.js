"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.snapshotObjectKeysAndTypes = snapshotObjectKeysAndTypes;
/**
 * Test utility to snapshot an objects enumerable keys and their type
 * @param object
 */
function snapshotObjectKeysAndTypes(object) {
	var test = {};
	Object.keys(object).forEach(function (key) {
		test[key] = _typeof(object[key]);
	});
	expect(JSON.stringify(test)).toMatchSnapshot();
}