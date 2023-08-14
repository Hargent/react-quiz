import PropTypes from "prop-types";
import { useEffect } from "react";

const Timer = ({ dispatch, timeLeft }) => {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	useEffect(() => {
		const id = setInterval(() => {
			dispatch({ type: "tik-tok" });
		}, 1000);

		return () => clearInterval(id);
	}, [dispatch]);
	return (
		<div className="timer">
			{minutes < 10 && "0"}
			{minutes}:{seconds < 10 && "0"}
			{seconds}
		</div>
	);
};

Timer.propTypes = {
	dispatch: PropTypes.func,
	timeLeft: PropTypes.number
};

export default Timer;
