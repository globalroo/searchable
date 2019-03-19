import { useState, useEffect } from "react";
import Oh404 from "src/assets/404.png";

export const useImageLoader = imageSrc => {
	const [image, setImage] = useState(Oh404);
	const [loaded, setLoaded] = useState(false);
	const loader = new window.Image(imageSrc);
	useEffect(() => {
		loader.onload = () => {
			setImage(imageSrc);
			setLoaded(true);
		};
		loader.src = imageSrc;
	}, [loaded]);
	return [image];
};
