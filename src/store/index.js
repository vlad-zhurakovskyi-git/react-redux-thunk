import { applyMiddleware, combineReducers, createStore } from 'redux'
import customersReducer from './reducers/customersReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	customersReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
