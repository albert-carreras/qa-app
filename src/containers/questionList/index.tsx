import React, { useEffect } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import Heading from "components/Heading";
import Question from "components/Question";

import { questionActions, questionSelectors } from "state/question";

import "./styles.scss";

// Types
import { Dispatch } from "redux";
import { Question as QuestionType } from "types/common.d";
import { State } from "types/state.d";
import {
  SortQuestions,
  ReadQuestions,
  UpdateQuestion,
  DeleteQuestion
} from "state/question/types";
interface Props {
  questions: Array<QuestionType>;
  readQuestions: Function;
  deleteQuestion: Function;
  updateQuestion: Function;
  sortQuestions: Function;
}

const QuestionList = ({
  questions,
  readQuestions,
  deleteQuestion,
  updateQuestion,
  sortQuestions
}: Props) => {
  useEffect(() => {
    readQuestions();
  }, [readQuestions]);
  const handleDeleteQuestion = (id: Number) => {
    deleteQuestion({ questionIds: [id], all: false });
  };
  const handleupdateQuestion = (question: QuestionType) => {
    updateQuestion(question);
  };
  return (
    <>
      <Heading tooltipText='Here you can create new questions and their answers'>
        Created Questions
      </Heading>
      {questions && questions.length > 0 ? (
        questions.map((question, i) => (
          <Question
            key={`question-${i}`}
            question={question}
            deleteQuestion={handleDeleteQuestion}
            updateQuestion={handleupdateQuestion}
          />
        ))
      ) : (
        <Paper
          variant='outlined'
          elevation={3}
          style={{
            backgroundColor: "rgba(200,0,0,0.25)",
            padding: 20,
            color: "rgb(200,0,0)"
          }}
        >
          No questions yet :-(
        </Paper>
      )}
      <br />
      <ButtonGroup variant='contained'>
        <Button
          variant='contained'
          color='primary'
          onClick={() => sortQuestions()}
        >
          Sort questions
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => deleteQuestion({ all: true })}
        >
          Delete ALL questions
        </Button>
      </ButtonGroup>
    </>
  );
};

const mapDispatchToProps = (
  dispatch: Dispatch<
    SortQuestions | ReadQuestions | UpdateQuestion | DeleteQuestion
  >
) => ({
  sortQuestions: () => dispatch(questionActions.sortQuestions()),
  readQuestions: () => dispatch(questionActions.readQuestions()),
  updateQuestion: (question: QuestionType) =>
    dispatch(questionActions.updateQuestion(question)),
  deleteQuestion: ({
    questionIds,
    all
  }: {
    questionIds: Array<number> & never[];
    all: boolean;
  }) => dispatch(questionActions.deleteQuestion({ questionIds, all }))
});

const mapStateToProps = (state: State) => ({
  questions: questionSelectors.getQuestions(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
