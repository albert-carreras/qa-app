import types from "./types";

const readQuestions = () => ({
  type: types.READ_QUESTIONS
});

const createQuestion = ({ question }) => ({
  type: types.CREATE_QUESTION,
  payload: {
    question
  }
});
const sortQuestions = ({ question }) => ({
  type: types.SORT_QUESTIONS,
  payload: {}
});
const setQuestions = ({ questions }) => ({
  type: types.SET_QUESTIONS,
  payload: {
    questions
  }
});
const deleteQuestion = ({ question }) => ({
  type: types.DELETE_QUESTION,
  payload: {}
});
const updateQuestion = ({ question }) => ({
  type: types.UPDATE_QUESTION,
  payload: {}
});

export default {
  readQuestions,
  createQuestion,
  sortQuestions,
  setQuestions,
  deleteQuestion,
  updateQuestion
};
