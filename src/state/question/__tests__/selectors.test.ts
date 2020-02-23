import selectors from "../selectors";

const state = {
  question: {
    questions: [
      {
        id: 1,
        question: "What is your mother's maiden name?",
        answer: "John Rambo"
      },
      {
        id: 2,
        question: "What is the name of the road you grew up on?",
        answer: "5th Avenue"
      },
      {
        id: 3,
        question: "What was the name of your first/current/favorite pet?",
        answer: "Arnold"
      }
    ]
  }
};
const emptyState = { question: {} };

const questionSelect = [
  {
    id: 1,
    question: "What is your mother's maiden name?",
    answer: "John Rambo"
  },
  {
    id: 2,
    question: "What is the name of the road you grew up on?",
    answer: "5th Avenue"
  },
  {
    id: 3,
    question: "What was the name of your first/current/favorite pet?",
    answer: "Arnold"
  }
];

describe("Question::Selectors", () => {
  describe("getQuestions", () => {
    it("should return the list of questions in full state", () => {
      expect(selectors.getQuestions(state)).toEqual(questionSelect);
    });

    it("should return undefined for empty state", () => {
      expect(selectors.getQuestions(emptyState)).toBeUndefined();
    });
  });

  describe("getQuestionCount", () => {
    it("should return the error for full state", () => {
      expect(selectors.getQuestionCount(state)).toEqual(3);
    });

    it("should return undefined for empty state", () => {
      expect(selectors.getQuestionCount(emptyState)).toBeUndefined();
    });
  });
});
