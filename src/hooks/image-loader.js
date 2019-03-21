import { useState, useEffect, useRef } from "react";
import Oh404 from "src/assets/404.png";

export const useImageLoader = imageSrc => {
	const [image, setImage] = useState(imageSrc);

	const mounted = useRef(true);

	useEffect(() => {
		const loader = new window.Image(imageSrc);
		const setLoaded = () => {
			if (mounted.current) setImage(imageSrc);
		};
		const setError = () => {
			if (mounted.current) setImage(Oh404);
		};

		loader.addEventListener("load", setLoaded);
		loader.addEventListener("error", setError);
		loader.src = imageSrc;

		return () => {
			mounted.current = false;
			loader.removeEventListener("load", setLoaded);
			loader.removeEventListener("error", setError);
		};
	}, [image]);

	return [image];
};
