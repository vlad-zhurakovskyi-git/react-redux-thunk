import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../store/asyncActions/customersAction";
import { deletePost } from "../../store/actions/customersActions";

const Customers = () => {
	const dispatch = useDispatch();
	const { customers, loading, error } = useSelector(({ customersReducer }) => customersReducer);

	useEffect(() => {
		dispatch(fetchCustomers())
	}, []);

	if ( error ) return <div>{error}</div>
	if ( loading ) return <div>loading</div>
	if ( !customers.length ) return <div>Пусто</div>;

	const deletingPost = (id) => dispatch(deletePost(id));
	
	return (
		<div>
			{customers?.map(({ id, title, body }) => (
				<div key={id} className='card'>
					<div className='title'>{title}</div>
					<div className='body'>{body}</div>
					<button onClick={() => deletingPost(id)} type='button'>delete</button>
				</div>
			))}
		</div>
	);
};

export default Customers;