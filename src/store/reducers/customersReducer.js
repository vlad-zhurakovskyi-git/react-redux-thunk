import {
	GET_CUSTOMERS,
	GET_CUSTOMERS_SUCCESS,
	GET_CUSTOMERS_ERROR, DELETE_POST
} from '../actionTypes';

const initialState = {
	customers: [],
	loading: false,
	error: null
};

export default function customersReducer(state = initialState, action) {
	switch ( action.type ) {
		case GET_CUSTOMERS_SUCCESS:
			return {
				loading: true,
				error: action.payload,
				customers: [],
			};

		case GET_CUSTOMERS:
			return {
				loading: false,
				error: null,
				customers: action.payload,
			};

		case GET_CUSTOMERS_ERROR:
			return {
				loading: false,
				error: action.payload,
				customers: [],
			};

		case DELETE_POST:
			return {
				...state,
				customers: state.customers.filter(post => post.id !== action.payload)
			};

		default:
			return state
	}
}
