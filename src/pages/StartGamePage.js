import React, { useState } from "react";
import { startGame } from "../store/slices/gameinit";
import { useDispatch } from "react-redux";

const StartGamePage = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const startGamehandler = () => {
    dispatch(startGame({ username }));
  };

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your Name.." />
      <button onClick={startGamehandler}>Start Game</button>
    </div>
  );
};

export default StartGamePage;
