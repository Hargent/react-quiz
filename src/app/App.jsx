// import DateCounter from "../components/date-counter/date-counter";
import { useEffect, useReducer } from "react";

import Error from "../components/error/error";
import Header from "../components/header/header";
import Loader from "./../components/loader/loader";
import Main from "../components/main/main";
import Question from "../components/question/question";
import StartScreen from "../components/start-screen/start-screen";
import reducer from "../reducer/reducer";
import Progress from "../components/progress/progress";
import Completed from "../components/completed/completed";

function App() {
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
	const [
		{ questions, status, currIndex, answer, points, highScore, timeLeft },
		dispatch
	] = useReducer(reducer, initialState);
	useEffect(() => {
		console.log("loading questions");
		const getQuestions = async () => {
			try {
				const response = await fetch("http://localhost:8080/questions");
				const data = await response.json();

				dispatch({ type: "dataFetched", payload: data });

				// console.log(data);
			} catch (err) {
				dispatch({ type: "fetchFailed" });
				console.log(err);
			}
		};
		getQuestions();
	}, []);
	const numberOfQuestions = questions.length;
	// console.log(points);
	// const totalPoints = questions
	// 	.map(question => question.points)
	// 	.reduce((acc, val) => acc + val);
	const totalPoints = questions.reduce((acc, val) => acc + val.points, 0);

	// console.log(numberOfQuestions, currIndex);
	return (
		<div className="app">
			<Header />
			<Main>
				{status === "loading" && <Loader />}
				{status === "error" && <Error />}
				{status === "ready" && (
					<StartScreen
						numberOfQuestions={numberOfQuestions}
						dispatch={dispatch}
					/>
				)}
				{status === "active" && (
					<>
						<Progress
							index={currIndex}
							numOfQuestions={numberOfQuestions}
							points={points}
							totalPoints={totalPoints}
							answer={answer}
						/>
						<Question
							question={questions.at(currIndex)}
							dispatch={dispatch}
							answer={answer}
							numberOfQuestions={numberOfQuestions}
							currIndex={currIndex}
							timeLeft={timeLeft}
						/>
					</>
				)}
				{status === "completed" && (
					<Completed
						points={points}
						totalPoints={totalPoints}
						dispatch={dispatch}
						highScore={highScore}
					/>
				)}
			</Main>
		</div>
	);
}

export default App;
