'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProEnterApp = undefined;

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create the global form settings UI
 * @param {Object} props
 * @return {*}
 * @constructor
 */
var ProEnterApp = exports.ProEnterApp = function ProEnterApp(props) {
  return _React2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(props.className, ProEnterApp.classNames.wrapper)
    },
    'ProEnterApp'
  );
};

/**
 * Prop types for the GlobalForms settings component
 * @type {{}}
 */
ProEnterApp.propTypes = {
  classNames: _propTypes2.default.string
};

/**
 * Default props for the GlobalForms settings component
 * @type {{}}
 */
ProEnterApp.defaultProps = {};

/**
 * Class names used in the GlobalForms settings component
 * @type {{wrapper: string}}
 */
ProEnterApp.classNames = {
  wrapper: 'caldera-forms-global-form-settings'
};