import { useState, useEffect } from "react";
import Oh404 from "src/assets/404.png";

export const useImageLoader = imageSrc => {
	const [image, setImage] = useState(null);
	const loader = new window.Image(imageSrc);
	useEffect(() => {
		loader.onload = () => {
			setImage(imageSrc);
		};
		loader.onerror = () => {
			setImage(Oh404);
		};
		loader.src = imageSrc;
	}, []);
	return [image];
};
