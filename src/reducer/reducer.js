const reducer = (state, action) => {
	const initialState = {
		questions: [],
		// loading,ready,error,active,finished
		status: "loading",
		currIndex: 0,
		answer: null,
		points: 0,
		highScore: 0,
		timeLeft: null
	};
	const question = state.questions.at(state.currIndex);
	const SEC_PER_QUESTION = 10;
	// const point = Math.floor((1 / state.questions.length) * 100);
	switch (action.type) {
		case "dataFetched":
			return {
				...state,
				questions: action.payload,
				status: "ready"
			};
		case "fetchFailed":
			return {
				...state,
				status: "error"
			};
		case "start":
			return {
				...state,
				status: "active",
				timeLeft: state.questions.length * SEC_PER_QUESTION
			};
		case "newAnswer":
			return {
				...state,
				answer: action.payload,
				points:
					action.payload === question.correctOption
						? state.points + question.points
						: state.points
			};
		case "nextQuestion":
			return {
				...state,
				currIndex: state.currIndex + 1,
				answer: null
			};

		case "completeQuiz":
			return {
				...state,
				status: "completed",
				highScore:
					state.points > state.highScore
						? state.points
						: state.highScore
			};
		case "tik-tok":
			return {
				...state,
				timeLeft: state.timeLeft - 1,
				status: state.timeLeft === 0 ? "completed" : state.status,
				highScore:
					state.points > state.highScore
						? state.points
						: state.highScore
			};
		case "restart":
			return {
				...initialState,
				questions: state.questions,
				status: "ready"
			};
		// return initialState,
		default:
			throw new Error("Action is Unknown");
	}
};
// const reducer = (state, action) => {
// 	const { count, step } = state;
// 	const initialState = { count: 0, step: 1 };

// 	try {
// 		switch (action.type) {
// 			case "inc":
// 				return { ...state, count: count + step };
// 			case "dec":
// 				return { ...state, count: count - step };
// 			case "setStep":
// 				return { ...state, step: action.payload };
// 			case "setCount":
// 				return { ...state, count: action.payload };
// 			case "reset":
// 				return initialState;

// 			default:
// 				throw new Error("Unknown Action");
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// 	// if (action.type === "inc") return state + action.payload;
// 	// if (action.type === "dec") return state - action.payload;
// 	// if (action.type === "setCount") return action.payload;
// 	return state ? state : 0;
// };

export default reducer;
