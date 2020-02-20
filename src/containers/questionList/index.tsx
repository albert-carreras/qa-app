import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { questionActions, questionSelectors } from "state/question";

const QuestionList = ({ questions, readQuestions }) => {
  useEffect(() => {
    readQuestions();
  });

  return (
    <>
      {questions &&
        questions.map((q, i) => (
          <>
            <p key={`question-${i}`}>ID: {q.id}</p>
            <p key={`question-${i}`}>Q: {q.question}</p>
            <p key={`answer-${i}`}>A: {q.answer}</p>
          </>
        ))}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  readQuestions: () => dispatch(questionActions.readQuestions())
});

const mapStateToProps = state => ({
  questions: questionSelectors.getQuestions(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
