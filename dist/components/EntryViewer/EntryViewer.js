"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EntryViewer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("react-table/react-table.css");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = require("@wordpress/components");

var _reactDataGrid = require("react-data-grid");

var _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);

var _pickArray = require("../util/pickArray");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A viewer for Caldera (FormsSlot) entries
 *
 * Keep this abstracted from the shape of Caldera (FormsSlot) entries.
 * <FormEntryViewer> uses this component, it shapes data to rows/ columns.
 */
var EntryViewer = exports.EntryViewer = function (_React$PureComponent) {
	_inherits(EntryViewer, _React$PureComponent);

	/**
  * @param props
  */
	function EntryViewer(props) {
		_classCallCheck(this, EntryViewer);

		var _this = _possibleConstructorReturn(this, (EntryViewer.__proto__ || Object.getPrototypeOf(EntryViewer)).call(this, props));

		_this.state = {
			loading: true,
			columnIds: [],
			page: !isNaN(props.page) ? props.page : 1
		};

		_this.onNext = _this.onNext.bind(_this);
		_this.onPrevious = _this.onPrevious.bind(_this);
		_this.rowGetter = _this.rowGetter.bind(_this);
		_this.setColumnIds = _this.setColumnIds.bind(_this);
		_this.rowHasColumn = _this.rowHasColumn.bind(_this);
		_this.componentDidMount = _this.componentDidMount.bind(_this);
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(EntryViewer, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.setColumnIds();
		}

		/**
   * Set the columnIds index of state
   */

	}, {
		key: "setColumnIds",
		value: function setColumnIds() {
			var columnIds = (0, _pickArray.pickArray)(this.props.columns, 'key');
			this.setState({ columnIds: columnIds });
		}

		/**
   * Check if an index in a row represents a valid column
   * @param {String}rowId
   * @return {boolean}
   */

	}, {
		key: "rowHasColumn",
		value: function rowHasColumn(rowId) {
			return this.state.columnIds.includes(rowId);
		}

		/**
   * Navigate to previous page
   */

	}, {
		key: "onPrevious",
		value: function onPrevious() {
			var page = this.state.page;

			this.setState({ page: page - 1 });
			this.props.onPageNav(page, this.state.page);
		}

		/**
   * Navigate to next page
   */

	}, {
		key: "onNext",
		value: function onNext() {
			var page = this.state.page;

			this.setState({ page: page + 1 });
			this.props.onPageNav(page, this.state.page);
		}

		/**
   * Check if we have a page before this page
   */

	}, {
		key: "isPreviousDisabled",
		value: function isPreviousDisabled() {
			return 1 >= this.state.page;
		}

		/**
   * Check if we have a page after this page
   */

	}, {
		key: "isNextDisabled",
		value: function isNextDisabled() {
			return this.props.totalPages >= this.state.page;
		}

		/**
   * Get data for one row
   * @param {Number} i
   * @return {*}
   */

	}, {
		key: "rowGetter",
		value: function rowGetter(i) {
			return this.props.rows[i];
		}
	}, {
		key: "render",


		/**
   * Render EntryViewer component
   * @return {*}
   */
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(_reactDataGrid2.default, {
					columns: this.props.columns,
					rowGetter: this.rowGetter,
					rowsCount: this.props.rows.length,
					minHeight: 500
				}),
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						_components.Button,
						{
							className: EntryViewer.classNames.nextNav,
							isLarge: true,
							isDefault: true,
							isDisabled: this.isPreviousDisabled(),
							onClick: this.onPrevious
						},
						"Previous Page"
					),
					_react2.default.createElement(
						"span",
						null,
						"Page ",
						this.state.page,
						" of ",
						this.state.totalPages
					),
					_react2.default.createElement(
						_components.Button,
						{
							className: EntryViewer.classNames.nextNav,
							isLarge: true,
							isDefault: true,
							isDisabled: this.isNextDisabled(),
							onClick: this.onNext
						},
						"Next Page"
					)
				)
			);
		}
	}]);

	return EntryViewer;
}(_react2.default.PureComponent);

;

/**
 * Prop type definitions for EntryViewer component
 *
 * @type {{columns: shim, rows: shim, className: shim, data: shim, totalPages: shim, onPageNav: shim, onDelete: shim, onExport: shim, onChangeEntryStatus: shim, dateFormat: shim, defaultPageSize: shim, prePrepareData: shim}}
 */
EntryViewer.propTypes = {
	columns: _propTypes2.default.array.isRequired,
	rows: _propTypes2.default.array.isRequired,
	className: _propTypes2.default.string,
	page: _propTypes2.default.number,
	totalPages: _propTypes2.default.number,
	onPageNav: _propTypes2.default.func,
	onDelete: _propTypes2.default.func,
	onExport: _propTypes2.default.func,
	onChangeEntryStatus: _propTypes2.default.func
};

/**
 * Default properties for the EntryViewer component
 * @type {{dateFormat: string, defaultPageSize: number, prePrepareData: EntryViewer.defaultProps.prePrepareData}}
 */
EntryViewer.defaultProps = {
	page: 1
};

EntryViewer.classNames = {
	prevNav: 'entry-nav-prev',
	nextNav: 'entry-nav-next'
};