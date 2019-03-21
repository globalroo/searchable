import { useState, useEffect } from "react";

// Centralise byId loading / state management
export const useByIdLoader = ({ id, fetcher }) => {
	const [response, setResponse] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setError(() => false);
		setLoading(() => true);
		fetcher(id).then(response => {
			if (!response.response.ok) {
				setError(() => true);
			}
			setLoading(() => false);
			setResponse(() => response);
		});
	}, [id]);

	return { loading, error, response };
};
