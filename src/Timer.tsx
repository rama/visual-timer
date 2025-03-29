import { useState, useRef, useEffect } from "react";

export default function Timer() {
	const [duration, setDuration] = useState(0);
	const startTime = useRef(NaN);
	const animationFrameId = useRef(NaN);

	function startTimer() {
		startTime.current = performance.now();
		animationFrameId.current = requestAnimationFrame(onFrame);
	}

	function onFrame(now: DOMHighResTimeStamp) {
		const timeElapsed = Math.floor((now - startTime.current) / 1000);
		if (timeElapsed <= duration) {
			setDuration(duration - timeElapsed);
			animationFrameId.current = requestAnimationFrame(onFrame);
		}
	}

	useEffect(() => {
		return () => {
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current);
			}
		};
	}, []);

	return (
		<>
			<input
				name="duration"
				type="number"
				value={duration}
				onChange={(e) => {
					const newDuration = parseInt(e.target.value) || 0;
					setDuration(newDuration);
				}}
			/>
			<button onClick={startTimer}>Start</button>
		</>
	);
}
