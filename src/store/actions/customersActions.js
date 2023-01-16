import { DELETE_POST, GET_CUSTOMERS, GET_CUSTOMERS_ERROR, GET_CUSTOMERS_SUCCESS } from "../actionTypes";

export const getCustomers = (payload) => {
	return {
		type: GET_CUSTOMERS,
		payload: payload
	}
};

export const getCustomersSuccess = () => {
	return {
		type: GET_CUSTOMERS_SUCCESS
	}
};

export const getCustomersError = () => {
	return {
		type: GET_CUSTOMERS_ERROR,
		payload: 'Возникла ошибка'
	}
};

export const deletePost = (payload) => {
	return {
		type: DELETE_POST,
		payload: payload
	}
};