import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../store/slices/gameinit";
import Button from "../components/Button";
const EndGamePage = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const score = useSelector((state) => state.quiz.score);
  const restarthandler = () => {
    dispatch(restartGame());
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-purple-500 my-4">Game Over</h1>
      <p className="text-2xl mb-4">
        Your Score was <span className="text-purple-500">{score}/10</span>
      </p>

      <Button onClick={restarthandler}>Restart Game</Button>
      <div className="mt-4 p-4">
        {answers.map((answer) => (
          <div className="border-b-2 border-purple-500 flex justify-between bg-white">
            <p dangerouslySetInnerHTML={{ __html: answer.question }} className="p-2 mr-2"></p>
            <span className={`p-2 ${answer.correctAnswer === answer.answer ? "text-green-500" : "text-red-500"}`}>{answer.answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EndGamePage;
