import React, { useState, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../store/slices/game";
import { finishGame } from "../store/slices/gameinit";
import Button from "../components/Button";
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
    <>
      <div className="flex flex-col items-center relative">
        <p className="h-20 w-20 flex justify-center items-center border-8 border-purple-500 rounded-full my-4 text-3xl text-purple-500">
          {timeLeft}
        </p>
        <p className="absolute top-4 left-4 text-2xl text-purple-500">Score:{score}</p>
        <p className="absolute top-4 right-4 text-2xl text-purple-500">{currentQuestionIndex + 1}/10</p>
        <p className="p-7 bg-white rounded shadow" dangerouslySetInnerHTML={{ __html: currentQuestion }}></p>
        <div className="flex justify-between w-96 mt-8">
          <Button onClick={() => answerHandler("True")}>True</Button>
          <Button onClick={() => answerHandler("False")}>False</Button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <Button type="error" onClick={endGamehandler}>
          End Game
        </Button>
      </div>
    </>
  );
};

export default GamePage;
