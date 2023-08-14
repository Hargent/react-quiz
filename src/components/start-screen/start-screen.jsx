import Button from "../button/button";
import PropTypes from "prop-types";

const StartScreen = ({ numberOfQuestions, dispatch }) => {
	return (
		<div className="start">
			<h2>Welcome to The React Quiz!</h2>
			<h3>{numberOfQuestions} Questions to test your React Mastery</h3>
			<Button additionalClass="btn-ui" onClick={dispatch} type="start">
				Let&apos;s Start
			</Button>
		</div>
	);
};
StartScreen.propTypes = {
	numberOfQuestions: PropTypes.number,
	dispatch: PropTypes.func
};

export default StartScreen;
