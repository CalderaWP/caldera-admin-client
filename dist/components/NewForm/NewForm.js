'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NewForm = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@caldera-labs/components');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _types = require('../../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fieldFactory = _components.factories.fieldFactory;


var fieldConfigs = [{
	id: 'newFormName',
	label: 'Name',
	type: 'text'
}, {
	id: 'newFormTemplate',
	type: 'dropdown',
	label: 'Template',
	options: [],
	conditionals: [function (values) {
		return 'templates' === values.newFormCreateFrom;
	}]
}, {
	'id': 'newFormCreateFrom',
	'type': 'dropdown',
	'label': 'Create Form Using',
	options: [{
		value: 'templates',
		label: 'From Template'
	}, {
		value: 'clone',
		label: 'Clone Existing'
	}]
}, {
	id: 'newFormSubmitButton',
	label: 'Create Form',
	type: 'button',
	inputType: 'submit',
	value: 'Submit'
}];

/**
 * The form for creating a new form
 */

var NewForm = exports.NewForm = function (_React$PureComponent) {
	_inherits(NewForm, _React$PureComponent);

	/**
  * Create CreateFormSlot component
  * @param {Object} props
  */
	function NewForm(props) {
		_classCallCheck(this, NewForm);

		var _this = _possibleConstructorReturn(this, (NewForm.__proto__ || Object.getPrototypeOf(NewForm)).call(this, props));

		_this.state = {
			newFormName: '',
			newFormTemplate: '',
			newFormCreateFrom: 'templates'
		};
		_this.getFieldComponents = _this.getFieldComponents.bind(_this);
		return _this;
	}

	/**
  * Create the field components for CreateFormSlot
  */


	_createClass(NewForm, [{
		key: 'getFieldComponents',
		value: function getFieldComponents() {
			var _this2 = this;

			var fields = {};
			this.props.fieldConfigs.forEach(function (fieldConfig) {
				var id = fieldConfig.id;

				if ('newFormSubmitButton' !== id) {
					fieldConfig.onValueChange = function (newValue) {
						var update = {};
						update[id] = newValue;
						_this2.setState(update);
					};
					fieldConfig.value = _this2.state[id];
					if ('newFormTemplate' === id) {
						fieldConfig.options = _this2.props.templates;
					}
				} else {
					fieldConfig.onClick = function () {
						_this2.props.onCreate(_extends({}, _this2.state));
					};
				}
				fields[id] = fieldFactory(fieldConfig);
			});
			return fields;
		}

		/**
   * Render CreateFormSlot component
   * @return {*}
   */

	}, {
		key: 'render',
		value: function render() {
			var components = this.getFieldComponents();
			return _react2.default.createElement(
				'div',
				null,
				this.props.fieldConfigs.map(function (fieldConfig) {
					var id = fieldConfig.id;

					return _react2.default.createElement(_react2.default.Fragment, {
						key: 'newForm-' + id
					}, components[id]);
				})
			);
		}
	}]);

	return NewForm;
}(_react2.default.PureComponent);

;

/**
 * prop definitions for CreateFormSlot component.
 *
 * @type {{fieldConfigs: shim, onCreate: *, templates: shim}}
 */
NewForm.propTypes = {
	fieldConfigs: _propTypes2.default.array,
	onCreate: _propTypes2.default.func.isRequired,
	templates: _propTypes2.default.array,
	forms: _types.collectionTypes.formsType
};

/**
 * Default props for CreateFormSlot component
 *
 * @type {{fieldConfigs: *[]}}
 */
NewForm.defaultProps = {
	fieldConfigs: fieldConfigs,
	forms: {}
};