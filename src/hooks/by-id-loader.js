import { useState, useEffect } from "react";

// Centralise byId loading / state management
export const useByIdLoader = ({ id, fetcher }) => {
	const [detail, setDetail] = useState({});
	useEffect(() => {
		fetcher(id).then(response => {
			setDetail(() => response);
		});
	}, [id]);
	return [detail];
};
