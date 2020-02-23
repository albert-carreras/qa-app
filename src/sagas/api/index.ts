import dummyData from "./dummy.json";

// Types
import { Question as QuestionType } from "types/common.d";

// One percent of the API calls fail (terrible backend)

export interface Response {
  success: boolean;
  id?: number;
  questions?: Array<QuestionType>;
}

export const createQuestion = (question: QuestionType) => {
  const failedCalled = Math.random() < 0.02;
  // The "backend" saves the question and returns its id
  const id = Math.floor(Math.random() * 1000) + 4;
  return new Promise(resolve =>
    resolve({ success: failedCalled ? false : true, id })
  );
};

export const readQuestions = () => {
  const failedCalled = Math.random() < 0.02;
  if (failedCalled) {
    return { success: false };
  }
  return new Promise(resolve =>
    resolve({
      success: true,
      questions: dummyData && dummyData.questions
    })
  );
};

export const updateQuestion = (question: QuestionType) => {
  const failedCalled = Math.random() < 0.02;
  return new Promise(resolve =>
    resolve({
      success: failedCalled ? false : true
    })
  );
};

export const deleteQuestion = ({
  questionIds,
  all = false
}: {
  questionIds: Array<number>;
  all: boolean;
}) => {
  const failedCalled = Math.random() < 0.02;
  return new Promise(resolve =>
    resolve({
      success: failedCalled ? false : true
    })
  );
};
