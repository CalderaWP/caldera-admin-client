import CalderaFormsAdmin from './CalderaFormsAdmin'
import { connect } from 'react-redux';
import adminState from './state/index';
const {dispatchers,selectors} = adminState;

/**
 * Prepared state selection

 * @param {Object} currentState
 */
const mapStateToProps = (currentState) => {
	return selectors(currentState);
};

/**
 * Prepared dispatch functions
 *
 * @param {Function} dispatch
 */
const mapDispatchToProps = dispatch => {
	return dispatchers(dispatch);
};


export const CfAdminWithState =  connect(mapStateToProps, mapDispatchToProps)(CalderaFormsAdmin);