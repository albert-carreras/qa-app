import actions from "../actions";
import reducer from "../reducers";

Date.now = jest.fn().mockReturnValue(0);

describe("Question::reducer", () => {
  const currentState = {
    questions: [
      {
        id: 1,
        question: "What is your mother's maiden name?",
        answer: "John Rambo"
      }
    ]
  };

  it("should return state on unrelated action", () => {
    expect(reducer(currentState, { type: "FOO_BAR" })).toEqual(currentState);
  });

  it("should respond to READ_QUESTIONS with new Questions", () => {
    const payload = [
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
    expect(
      reducer(currentState, actions.readQuestionsSuccess(payload))
    ).toEqual({
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
    });
  });

  it("should respond to CREATE_QUESTION by adding a question", () => {
    const payload = {
      id: 2,
      question: "Test?",
      answer: "Yes"
    };
    expect(
      reducer(currentState, actions.createQuestionSuccess(payload))
    ).toEqual({
      questions: [
        {
          id: 1,
          question: "What is your mother's maiden name?",
          answer: "John Rambo"
        },
        payload
      ]
    });
  });
});
