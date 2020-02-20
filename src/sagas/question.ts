import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  createQuestion,
  readQuestions,
  updateQuestion,
  deleteQuestion
} from "./api";

import { questionActions, questionTypes } from "state/question";

export function* handleCreateQuestion(action) {
  try {
    const response = yield call(createQuestion, action.payload.question);
    if (response && response.success) {
      yield put(questionActions.createQuestion(action.payload.question));
    }
  } catch (e) {
    console.error("Something went wrong!", e);
  }
}

export function* handleReadQuestions(action) {
  try {
    const response = yield call(readQuestions);
    if (response && response.success) {
      yield put(questionActions.setQuestions(response));
    }
  } catch (e) {
    console.error("Something went wrong!", e);
  }
}

export function* handleUpdateQuestion(action) {
  try {
    const response = yield call(updateQuestion, action.payload.question);
    if (response && response.success) {
      yield put(questionActions.updateQuestion(action.payload.question));
    }
  } catch (e) {
    console.error("Something went wrong!", e);
  }
}

export function* handleDeleteQuestion(action) {
  try {
    const response = yield call(deleteQuestion, action.payload.question.id);
    if (response && response.success) {
      yield put(questionActions.deleteQuestion(action.payload.question));
    }
  } catch (e) {
    console.error("Something went wrong!", e);
  }
}

export function* watchQuestionActions() {
  yield all([
    takeLatest(questionTypes.CREATE_QUESTION, handleCreateQuestion),
    takeLatest(questionTypes.READ_QUESTIONS, handleReadQuestions),
    takeLatest(questionTypes.UPDATE_QUESTION, handleUpdateQuestion),
    takeLatest(questionTypes.DELETE_QUESTION, handleDeleteQuestion)
  ]);
}
