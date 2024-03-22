import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../store/slices/gameinit";

const EndGamePage = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const score = useSelector((state) => state.quiz.score);
  const restarthandler = () => {
    dispatch(restartGame());
  };
  return (
    <div>
      <p>Your Score was {score}/10</p>
      <button onClick={restarthandler}>Restart Game</button>
      {answers.map((answer) => (
        <div>
          <p dangerouslySetInnerHTML={{ __html: answer.question }}></p>-{answer.answer}-{answer.correctAnswer}
        </div>
      ))}
    </div>
  );
};

export default EndGamePage;
