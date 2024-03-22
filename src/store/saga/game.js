import { take, fork, all, cancel, put, delay, call, takeEvery, race } from "redux-saga/effects";
import { fetchQuestionsSuccess } from "../slices/game";
import { finishGame } from "../slices/gameinit";
import { answerQuestion, nextQuestion } from "../slices/game";

function* answersSaga() {
  for (let i = 0; i < 10; i++) {
    yield take(answerQuestion.type);
    yield put(nextQuestion());
  }
}

export default function* gameSaga() {
  while (true) {
    yield take(fetchQuestionsSuccess.type);
    yield race({
      delay: delay(60000),
      done: answersSaga(),
    });
    yield put(finishGame());
  }
}
