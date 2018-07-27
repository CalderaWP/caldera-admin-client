import {state}  from '@caldera-labs/state';
import {
	CALDERA_FORMS_TEMPLATE_STORE_SLUG,
	formTemplateReducer
} from "./state/templates-store";
import {createStore,combineReducers} from 'redux';
const {reducers} = state;

const CALDERA_ADMIN_REDUCERS = {
	...reducers,
};
CALDERA_ADMIN_REDUCERS[CALDERA_FORMS_TEMPLATE_STORE_SLUG] = formTemplateReducer;


export const  CALDERA_ADMIN_STORE = createStore(
	combineReducers(CALDERA_ADMIN_REDUCERS),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
