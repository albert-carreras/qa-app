import types from "./types";
import { Question as QuestionType } from "types/common.d";

const readQuestions = () => ({
  type: types.READ_QUESTIONS
});

const readQuestionsSuccess = (questions: Array<QuestionType>) => ({
  type: types.READ_QUESTIONS_SUCCESS,
  payload: {
    questions
  }
});

const createQuestion = (question: QuestionType) => ({
  type: types.CREATE_QUESTION,
  payload: { question }
});

const createQuestionSuccess = (question: QuestionType) => ({
  type: types.CREATE_QUESTION_SUCCESS,
  payload: { question }
});

const deleteQuestion = ({
  questionIds = [],
  all = false
}: {
  questionIds: Array<number>;
  all: boolean;
}) => ({
  type: types.DELETE_QUESTION,
  payload: {
    questionIds,
    all
  }
});

const deleteQuestionSuccess = ({
  questionIds = [],
  all = false
}: {
  questionIds: Array<number>;
  all: boolean;
}) => ({
  type: types.DELETE_QUESTION_SUCCESS,
  payload: {
    questionIds,
    all
  }
});

const updateQuestion = (question: QuestionType) => ({
  type: types.UPDATE_QUESTION,
  payload: { question }
});

const updateQuestionSuccess = (question: QuestionType) => ({
  type: types.UPDATE_QUESTION_SUCCESS,
  payload: { question }
});

const sortQuestions = () => ({
  type: types.SORT_QUESTIONS
});

export default {
  readQuestions,
  readQuestionsSuccess,
  createQuestion,
  createQuestionSuccess,
  deleteQuestion,
  deleteQuestionSuccess,
  updateQuestion,
  updateQuestionSuccess,
  sortQuestions
};
