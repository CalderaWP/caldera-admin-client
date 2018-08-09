"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var pickArray = exports.pickArray = function pickArray(array, key) {
	return array.reduce(function (accumualtor, item) {
		return accumualtor.concat([item[key]]);
	}, []);
};