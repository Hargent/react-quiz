import PropTypes from "prop-types";
import Options from "../options/options";
import Button from "../button/button";
import Footer from "../footer/footer";
import Timer from "../timer/timer";

const Question = ({
	question,
	dispatch,
	answer,
	numberOfQuestions,
	currIndex,
	timeLeft
}) => {
	return (
		<div>
			<h4>{question.question}</h4>
			<Options
				options={question.options}
				dispatch={dispatch}
				answer={answer}
				correctOption={question.correctOption}
			/>
			<Footer>
				<Timer dispatch={dispatch} timeLeft={timeLeft} />
				{answer !== null && (
					<Button
						additionalClass="btn-ui"
						onClick={dispatch}
						type={
							currIndex === numberOfQuestions - 1
								? "completeQuiz"
								: "nextQuestion"
						}>
						{currIndex === numberOfQuestions - 1
							? "Finish"
							: "Next"}
					</Button>
				)}
			</Footer>
		</div>
	);
};

Question.propTypes = {
	question: PropTypes.object,
	dispatch: PropTypes.func,
	answer: PropTypes.number,
	numberOfQuestions: PropTypes.number,
	currIndex: PropTypes.number,
	timeLeft: PropTypes.number
};

export default Question;
