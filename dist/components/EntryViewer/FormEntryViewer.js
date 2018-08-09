"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FormEntryViewer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EntryViewer = require("./EntryViewer");

var _Entry = require("./Entry");

var _getFormColumns = require("./getFormColumns");

var _getFormRows = require("./getFormRows");

var _getFormRows2 = _interopRequireDefault(_getFormRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Encapsulates the UI for viewing the saved entries of a form.
 */
var FormEntryViewer = exports.FormEntryViewer = function (_React$PureComponent) {
	_inherits(FormEntryViewer, _React$PureComponent);

	/**
  *
  * @param props
  */
	function FormEntryViewer(props) {
		_classCallCheck(this, FormEntryViewer);

		var _this = _possibleConstructorReturn(this, (FormEntryViewer.__proto__ || Object.getPrototypeOf(FormEntryViewer)).call(this, props));

		_this.state = {
			currentEntry: 0
		};
		_this.setCurrentEntry = _this.setCurrentEntry.bind(_this);
		_this.onEntryAction = _this.onEntryAction.bind(_this);
		return _this;
	}

	/**
  * Set ID of current entry
  *
  * @param {Number} currentEntry
  */


	_createClass(FormEntryViewer, [{
		key: "setCurrentEntry",
		value: function setCurrentEntry(currentEntry) {
			this.setState({ currentEntry: currentEntry });
		}
	}, {
		key: "onEntryAction",
		value: function onEntryAction(eventType, id) {
			switch (eventType) {
				case 'view':
					this.setCurrentEntry(id);
					break;
				default:
					return;
			}
		}

		/**
   * Render the FormEntryViewer
   * @return {*}
   */

	}, {
		key: "render",
		value: function render() {
			var currentEntry = this.state.currentEntry;

			if (0 <= currentEntry) {
				return _react2.default.createElement(
					"div",
					{
						className: FormEntryViewer.classNames.wrapper
					},
					_react2.default.createElement(_EntryViewer.EntryViewer, {
						columns: (0, _getFormColumns.getFormColumns)(this.props.form, 0 > this.state.currentEntry, true),
						rows: (0, _getFormRows2.default)(this.props.entries)
					})
				);
			}
			var entry = this.state.entries[currentEntry];
			return _react2.default.createElement(
				"div",
				{
					className: FormEntryViewer.classNames.wrapper
				},
				_react2.default.createElement(_Entry.Entry, {
					fields: entry.fields,
					user: entry.user,
					id: entry.id
				})
			);
		}
	}]);

	return FormEntryViewer;
}(_react2.default.PureComponent);

;

/**
 * Default props for the <FormEntryViewer> component
 *
 * @type {{form: *, getEntries: shim}}
 */
FormEntryViewer.propTypes = {
	form: _propTypes2.default.object.isRequired,
	entries: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array])
};

FormEntryViewer.classNames = {
	wrapper: 'caldera-forms-entry-viewer'
};