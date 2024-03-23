import React, { useState } from "react";
import { startGame } from "../store/slices/gameinit";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
const StartGamePage = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const startGamehandler = () => {
    dispatch(startGame({ username }));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-80">
      <input
        value={username}
        className="py-2 px-4 outline-none rounded shadow w-64 mb-6"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your Name.."
      />
      <Button className="" onClick={startGamehandler}>
        Start Game
      </Button>
    </div>
  );
};

export default StartGamePage;
