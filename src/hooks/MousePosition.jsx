import { useState, useEffect } from "react";

export default function useMousePosition() {
	const [mousePosition, setMousePosition] = useState({
		oldX: null,
		oldY: null,
		x: null,
		y: null,
		click: false,
	});

	useEffect(() => {
		const updateMousePosition = (ev) =>
			setMousePosition({
				...mousePosition,
				oldX: mousePosition.x,
				oldY: mousePosition.y,
				x: ev.clientX,
				y: ev.clientY,
			});
		const onMouseDown = () =>
			setMousePosition({ ...mousePosition, click: true });
		const onMouseUp = () =>
			setMousePosition({ ...mousePosition, click: false });

		window.addEventListener("mousemove", updateMousePosition);
		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mouseup", onMouseUp);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
			window.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mouseup", onMouseUp);
		};
	});

	return mousePosition;
}
