import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
	const [state, setState] = useState({
		loading: true,
		error: null,
		data: null,
	});

	useEffect(() => {
		axiosInstance(opts)
			.then((response) => {
				setState({ ...state, loading: false, data: response });
			})
			.catch((error) => {
				setState({ ...state, loading: false, error });
			});
	}, [state]);
	return state;
};

export default useAxios;
