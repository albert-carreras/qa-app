import { createSelector } from "reselect";

const getQuestionState = state => {
  return state.question;
};
const getQuestions = createSelector(
  getQuestionState,
  question => question.questions
);

export default {
  getQuestions
};
