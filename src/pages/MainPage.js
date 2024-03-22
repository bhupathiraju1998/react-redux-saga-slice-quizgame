import React from "react";
import { useSelector } from "react-redux";
import StartGame from "./StartGamePage";
import Game from "./GamePage";
import Fetching from "./FetchingPage";
import EndGame from "./EndGamePage";
import * as stages from "../utils/constants";
import FetchingPage from "./FetchingPage";

const MainPage = () => {
  const currentStage = useSelector((state) => state.gameState.stage);
  let displayPage;
  switch (currentStage) {
    case stages.START_GAME:
      displayPage = <StartGame />;
      break;
    case stages.FETCHING_GAME:
      displayPage = <Fetching />;
      break;
    case stages.END_GAME:
      displayPage = <EndGame />;
      break;
    case stages.GAME:
      displayPage = <Game />;
      break;
  }
  return <>{displayPage}</>;
};

export default MainPage;
