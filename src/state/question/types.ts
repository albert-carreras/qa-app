import { Question } from "types/common.d";

export type QuestionState = {
  questions: Array<Question>;
};

export type CreateQuestion = {
  type: String;
  payload: { question: Question };
};

export type DeleteQuestion = {
  type: String;
  payload: {
    questionIds: Array<number>;
    all: boolean;
  };
};

export type UpdateQuestion = {
  type: String;
  payload: { question: Question };
};

export type ReadQuestions = {
  type: String;
};

export type SortQuestions = {
  type: String;
};

export default {
  READ_QUESTIONS: "READ_QUESTIONS",
  READ_QUESTIONS_SUCCESS: "READ_QUESTIONS_SUCCESS",
  CREATE_QUESTION: "CREATE_QUESTION",
  CREATE_QUESTION_SUCCESS: "CREATE_QUESTION_SUCCESS",
  DELETE_QUESTION: "DELETE_QUESTION",
  DELETE_QUESTION_SUCCESS: "DELETE_QUESTION_SUCCESS",
  UPDATE_QUESTION: "UPDATE_QUESTION",
  UPDATE_QUESTION_SUCCESS: "UPDATE_QUESTION_SUCCESS",
  SORT_QUESTIONS: "SORT_QUESTIONS"
};
