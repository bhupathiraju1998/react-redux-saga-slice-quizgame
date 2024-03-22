import { combineReducers } from "redux";
import gameState from "../store/slices/gameinit";
import quiz from "./slices/game";

export default combineReducers({ gameState, quiz });
