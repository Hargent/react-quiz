import PropTypes from "prop-types";
import Button from "../button/button";

const Options = ({ options, dispatch, answer, correctOption }) => {
	return (
		<div className="options">
			{options.map((option, index) => (
				<Button
					key={option}
					additionalClass={`btn-option ${
						index === answer && "answer "
					} ${
						answer !== null
							? index === correctOption
								? "correct"
								: "wrong"
							: ""
					}  `}
					onClick={dispatch}
					type="newAnswer"
					disabled={answer !== null}
					payload={index}>
					{option}
				</Button>
			))}
		</div>
	);
};

Options.propTypes = {
	options: PropTypes.arrayOf(String),
	dispatch: PropTypes.func,
	answer: PropTypes.number,
	correctOption: PropTypes.number
};

export default Options;
