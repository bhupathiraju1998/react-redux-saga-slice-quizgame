import { take, fork, all, cancel, put, delay, call, takeEvery } from "redux-saga/effects";
import { startGame, cancelGame } from "../slices/gameinit";
import { fetchQuizFromApi } from "../../utils/api";
import { fetchQuestionsFail, fetchQuestionsSuccess } from "../slices/game";

function* fetchQuestionSaga() {
  try {
    yield delay(2000);
    const data = yield call(fetchQuizFromApi);
    yield put(fetchQuestionsSuccess(data));
    console.log(data);
  } catch (error) {
    console.log("error");
    yield put(fetchQuestionsFail("There wan an error fetching the questions"));
  }
}

function* cancelFetchQuiz(forkedSaga) {
  while (true) {
    yield take(cancelGame.type);
    yield cancel(forkedSaga);
  }
}

export default function* startGameSaga() {
  while (true) {
    yield take(startGame.type);
    console.log("second", startGame.type);
    const forkedSaga = yield fork(fetchQuestionSaga); // we intialize to forked saga because if we want to cancel the ongoing processs
    yield fork(cancelFetchQuiz, forkedSaga);
  }
}
