function ToolButton({ icon }) {
	return (
		<button className="p-2 bg-blue-500 rounded-r-lg h-10 w-10">
			<img src={`/assets/${icon}.svg`} className="w-full h-full" />
		</button>
	);
}

export default function Toolbar() {
	return (
		<div className="absolute flex flex-col justify-center items-center gap-y-2">
			<ToolButton icon="pencil" />
		</div>
	);
}
