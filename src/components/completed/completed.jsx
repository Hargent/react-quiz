import PropTypes from "prop-types";
import Button from "../button/button";

const Completed = ({ points, totalPoints, dispatch, highScore }) => {
	const percentage = (points / totalPoints) * 100;

	let emoji;
	if (percentage === 100) emoji = "🏅";
	if (percentage >= 70 && percentage < 100) emoji = "🎉";
	if (percentage >= 60 && percentage < 70) emoji = "";
	if (percentage >= 50 && percentage < 60) emoji = "🫤";
	if (percentage >= 40 && percentage < 50) emoji = "😒";
	if (percentage >= 0 && percentage < 40) emoji = "😵‍💫";
	return (
		<>
			<p className="result">
				<span>{emoji}</span>You scored <strong>{points}</strong> Out of{" "}
				<strong>{totalPoints}</strong> ({Math.ceil(percentage)}%)
			</p>
			<p className="highscore">(Highscore: {highScore} points)</p>
			<Button
				additionalClass={"btn-ui"}
				type="restart"
				onClick={dispatch}>
				Restart Quiz
			</Button>
		</>
	);
};

Completed.propTypes = {
	points: PropTypes.number,
	totalPoints: PropTypes.number,
	dispatch: PropTypes.func,
	highScore: PropTypes.number
};

export default Completed;
