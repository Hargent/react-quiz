import PropTypes from "prop-types";

const Progress = ({ index, numOfQuestions, points, totalPoints, answer }) => {
	return (
		<header className="progress">
			<progress
				max={numOfQuestions}
				value={index + Number(answer !== null)}
			/>
			<p>
				Question <strong>{index + 1}</strong>/{numOfQuestions}
			</p>
			<p>
				<strong>
					{points}/{totalPoints}
				</strong>
			</p>
		</header>
	);
};

Progress.propTypes = {
	index: PropTypes.number,
	numOfQuestions: PropTypes.number,
	points: PropTypes.number,
	totalPoints: PropTypes.number,
	answer: PropTypes.number
};

export default Progress;
