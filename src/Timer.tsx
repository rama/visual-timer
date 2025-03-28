import { useState } from "react";

export default function Timer() {
	const [duration, setDuration] = useState(0);

	function startTimer() {
		alert("Timer started");
	}

	return (
		<>
			<input
				name="duration"
				type="number"
				value={duration}
				onChange={(e) => setDuration(parseInt(e.target.value))}
			/>
			<button onClick={startTimer}>Start</button>
		</>
	);
}
