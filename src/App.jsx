import rough from "roughjs";
import { useEffect, useRef } from "react";
import Toolbar from "./components/Toolbar";
import { useWindowDimensions, useMousePosition } from "./hooks";

export default function App() {
	const canvasRef = useRef(null);
	const { height, width } = useWindowDimensions();
	const mousePosition = useMousePosition();

	useEffect(() => {
		const rc = rough.canvas(canvasRef.current);
		if (rc && mousePosition.click) {
			rc.line(
				mousePosition.oldX,
				mousePosition.oldY,
				mousePosition.x,
				mousePosition.y
			); // x1, y1, x2, y2
		}
	}, [mousePosition]);

	return (
		<div className="h-screen w-full flex items-center relative">
			<Toolbar />
			<canvas ref={canvasRef} width={width} height={height} />
			<button
				className="py-2 px-4 bg-blue-500 text-white fixed top-0 right-0 rounded-lg rounded-tr-none"
				onClick={() => console.log(rough.canvas(canvasRef.current))}
			>
				LOG
			</button>
		</div>
	);
}
