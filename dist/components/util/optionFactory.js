"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Creates option values for select fields
 * @param {String|number|Boolean} value Value of option
 * @param {String|number} label Optional. Label for option
 * @param {Object} other Optional. Additional data to add
 * @return {{value: *, label: *}}
 */
var optionFactory = exports.optionFactory = function optionFactory(value) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var other = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return _extends({}, other, {
    value: value,
    label: label ? label : value
  });
};