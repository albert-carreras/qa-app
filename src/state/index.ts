import { combineReducers } from "redux";

import question from "./question";

const appReducer = combineReducers({
  question
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
