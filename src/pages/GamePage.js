import React, { useState, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../store/slices/game";
import { finishGame } from "../store/slices/gameinit";

const GamePage = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((preState) => preState - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const dispatch = useDispatch();
  const currentQuestion = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex].question);

  const score = useSelector((state) => state.quiz.score);
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);

  const answerHandler = (answer) => {
    dispatch(answerQuestion({ answer }));
  };

  const endGamehandler = () => {
    dispatch(finishGame());
  };
  return (
    <div>
      <p>Time Left: {timeLeft}</p>
      <p>Score:{score}</p>
      <p>{currentQuestionIndex + 1}/10</p>
      <p dangerouslySetInnerHTML={{ __html: currentQuestion }}></p>
      <button onClick={() => answerHandler("True")}>True</button>
      <button onClick={() => answerHandler("False")}>False</button>
      <button onClick={endGamehandler}>End Game</button>
    </div>
  );
};

export default GamePage;
