import { call, put } from "redux-saga/effects";

import actions from "../actions";
import * as sagas from "sagas/question";
import * as api from "sagas/api";

describe("Question::sagas", () => {
  describe("handleUpdateQuestion", () => {
    const action = {
      payload: {
        id: 1,
        question: "What is your mother's   maiden name?",
        answer: "John Rambo"
      }
    };
    it("triggers success on response", () => {
      const apiResponse = { success: true };
      const generator = sagas.handleUpdateQuestion(action);

      expect(generator.next().value).toEqual(
        call(api.updateQuestion, action.payload)
      );

      expect(generator.next(apiResponse).value).toEqual(
        put(actions.updateQuestionSuccess(action.payload))
      );
    });
  });

  describe("handleDeleteQuestion", () => {
    it("triggers success on response, ids", () => {
      const action = {
        payload: {
          questionIds: [1],
          all: false
        }
      };
      const apiResponse = { success: true };
      const generator = sagas.handleDeleteQuestion(action);

      expect(generator.next().value).toEqual(
        call(api.deleteQuestion, action.payload)
      );

      expect(generator.next(apiResponse).value).toEqual(
        put(actions.deleteQuestionSuccess(action.payload))
      );
    });
    it("triggers success on response, all", () => {
      const action = {
        payload: {
          questionIds: [],
          all: true
        }
      };
      const apiResponse = { success: true };
      const generator = sagas.handleDeleteQuestion(action);

      expect(generator.next().value).toEqual(
        call(api.deleteQuestion, action.payload)
      );

      expect(generator.next(apiResponse).value).toEqual(
        put(actions.deleteQuestionSuccess(action.payload))
      );
    });
  });
});
