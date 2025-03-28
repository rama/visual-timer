import { useState, useEffect } from "react";

export default function Timer() {
	const [duration, setDuration] = useState(0);
	const [startTime, setStartTime] = useState(0);

	function startTimer(e: React.ChangeEvent<HTMLInputElement>) {
		setDuration(parseInt(e.target.value));
		setStartTime(performance.now());
		const frameId = requestAnimationFrame(onFrame);
	}

	function onFrame(now: DOMHighResTimeStamp) {
		const timeElapsed = Math.floor((now - startTime) / 1000);
		if (timeElapsed <= duration) {
			setDuration(duration - timeElapsed);
			const frameId = requestAnimationFrame(onFrame);
		}
	}

	return (
		<>
			<input
				name="duration"
				type="number"
				value={duration}
				onChange={startTimer}
			/>
		</>
	);
}
