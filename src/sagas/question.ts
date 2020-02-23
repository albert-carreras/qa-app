import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  createQuestion,
  readQuestions,
  updateQuestion,
  deleteQuestion
} from "./api";

import { questionActions, questionTypes } from "state/question";
import {
  CreateQuestion,
  ReadQuestions,
  UpdateQuestion,
  DeleteQuestion
} from "state/question/types";

import { Response } from "sagas/api";

export function* handleCreateQuestion(
  action: CreateQuestion
): Generator<any, any, any> {
  try {
    const response: Response = yield call(
      // @ts-ignore
      createQuestion,
      action.payload.question
    );
    if (response && response.success) {
      const question = { id: response.id, ...action.payload.question };
      yield put(questionActions.createQuestionSuccess(question));
    }
  } catch (e) {
    console.error("Something went wrong!", e);
  }
}

export function* handleReadQuestions(
  action: ReadQuestions
): Generator<any, any, any> {
  try {
    const response: Response = yield call(readQuestions);
    if (response && response.success && response.questions) {
      yield put(questionActions.readQuestionsSuccess(response.questions));
    }
  } catch (e) {
    console.error("Something went wrong!", e);
  }
}

export function* handleUpdateQuestion(
  action: UpdateQuestion
): Generator<any, any, any> {
  try {
    const response: Response = yield call(
      // @ts-ignore
      updateQuestion,
      action.payload.question
    );
    if (response && response.success) {
      yield put(questionActions.updateQuestionSuccess(action.payload.question));
    }
  } catch (e) {
    console.error("Something went wrong!", e);
  }
}

export function* handleDeleteQuestion(
  action: DeleteQuestion
): Generator<any, any, any> {
  try {
    // @ts-ignore
    const response: Response = yield call(deleteQuestion, action.payload);
    if (response && response.success) {
      yield put(questionActions.deleteQuestionSuccess(action.payload));
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
