import { useState, useEffect } from "react";

export default function Timer() {
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		if (duration > 0) {
			const intervalId = setInterval(() => {
				setDuration((d) => d - 1);
			}, 1000);
			return () => clearInterval(intervalId);
		}
	}, [duration]);

	return (
		<>
			<input
				name="duration"
				type="number"
				value={duration}
				onChange={(e) => setDuration(parseInt(e.target.value))}
			/>
		</>
	);
}
