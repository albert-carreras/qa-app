import types from "./types";
import { combineReducers } from "redux";

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_QUESTIONS:
    console.log(state, action)
      return state.concat(action.payload.questions);
    case types.DELETE_QUESTION:
      return state.filter((x: any) => x && x.id !== action.payload.id);
    case types.CREATE_QUESTION:
      return state.concat(action.payload.body);
    case types.SORT_QUESTIONS:
      return state; //TODO
    default:
      return state;
  }
};

const reducer = combineReducers({
  questions: questionsReducer
});

export default reducer;
