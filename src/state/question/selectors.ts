import { createSelector } from "reselect";
import { State } from "types/state";

const getQuestionState = (state: State) => {
  return state.question;
};
const getQuestions = createSelector(
  getQuestionState,
  question => question.questions
);

const getQuestionCount = createSelector(
  getQuestionState,
  question => question.questions && question.questions.length
);

export default {
  getQuestions,
  getQuestionCount
};
