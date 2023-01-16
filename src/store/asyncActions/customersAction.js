import axios from "axios";
import { getCustomers, getCustomersError, getCustomersSuccess } from "../actions/customersActions";

export const fetchCustomers = (limit = 10, page = 0) => {
	return async (dispatch) => {
		try {
			dispatch(getCustomersSuccess());

			const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_limit: limit,
					_page: page
				}
			});

			dispatch(getCustomers(response.data));
		} catch ( e ) {
			dispatch(getCustomersError())
		}
	}
}
