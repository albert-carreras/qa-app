import dummyData from "./dummy.json";

// One percent of the API calls fail (terrible backend)

export const createQuestion = ({ question }) => {
  const failedCalled = Math.random() < 0.1;
  // The "backend" saves the question and returns its id
  const id = Math.floor(Math.random() * 1000) + 4;
  return { success: failedCalled ? false : true, id  };
};

export const readQuestions = () => {
  const failedCalled = Math.random() < 0.1;
  if (failedCalled) {
    return { success: false };
  }
  return {
    success: true,
    questions: dummyData && dummyData.questions
  };
};

export const updateQuestion = ({ question }) => {
  const failedCalled = Math.random() < 0.1;
  return { success: failedCalled ? false : true };
};

export const deleteQuestion = ({ questions, all = false }) => {
  const failedCalled = Math.random() < 0.1;
  return { success: failedCalled ? false : true };
};
