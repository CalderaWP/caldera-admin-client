import App from './App'
import { connect } from 'react-redux';
import adminState from './state/index';
const {dispatchers,selectors} = adminState;
const mapStateToProps = (currentState) => {
	return selectors(currentState);
};

const mapDispatchToProps = dispatch => {
	return dispatchers(dispatch);
};


export const CfAdminWithState =  connect(mapStateToProps, mapDispatchToProps)(App);