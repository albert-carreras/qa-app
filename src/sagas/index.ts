import { all } from "redux-saga/effects";

import { watchQuestionActions } from "./question";

export default function* rootSaga() {
  yield all([watchQuestionActions()]);
}
