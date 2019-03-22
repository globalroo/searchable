import { useState, useEffect, useRef } from "react";

// Centralise byId loading / state management
export const useByIdLoader = ({ id, fetcher }) => {
	const [response, setResponse] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const mounted = useRef(true);

	useEffect(() => {
		mounted.current = true;
		fetcher(id).then(response => {
			if (mounted.current === false) return;
			setError(() => false);
			setLoading(() => true);
			if (!response.response.ok) {
				setError(() => true);
			}
			setLoading(() => false);
			setResponse(() => response);
		});

		return () => {
			mounted.current = false;
		};
	}, [id]);

	return { loading, error, response };
};
