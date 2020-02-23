import types from "./types";
import { Action, combineReducers } from "redux";

import { Question } from "types/common.d";

type QuestionAction = Action & {
  payload: {
    question?: Question;
    questions?: Array<Question>;
    all?: boolean;
    questionIds?: Array<number>;
  };
};

const questionsReducer = (
  state: Array<Question> = [],
  action: QuestionAction
) => {
  switch (action.type) {
    case types.READ_QUESTIONS_SUCCESS:
      return action.payload.questions;

    case types.DELETE_QUESTION_SUCCESS:
      const { all, questionIds } = action.payload;
      if (all) {
        return [];
      } else if (questionIds) {
        return state.filter(q => {
          return questionIds.indexOf(q.id) === -1;
        });
      }
      return state;

    case types.CREATE_QUESTION_SUCCESS:
      if (!action.payload.question) {
        return state;
      }
      return state.concat(action.payload.question);

    case types.UPDATE_QUESTION_SUCCESS:
      return state.map(existingQuestion => {
        if (!action.payload.question) {
          return existingQuestion;
        }
        const { id, question, answer } = action.payload.question;
        if (existingQuestion.id === id) {
          return {
            id,
            question,
            answer
          };
        }
        return existingQuestion;
      });

    case types.SORT_QUESTIONS:
      const sorted = Array.from(
        state.sort((a, b) =>
          a.question.toLowerCase() > b.question.toLowerCase() ? 1 : -1
        )
      );
      return sorted;

    default:
      return state;
  }
};

const reducer = combineReducers({
  questions: questionsReducer
});

export default reducer;
