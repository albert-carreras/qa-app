import React, { useState } from "react";
import { Field, Form, Formik } from "formik";

import DeleteIcon from "@material-ui/icons/DeleteRounded";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";

import Tooltip from "components/Tooltip";

import { Question as QuestionType } from "types/common.d";

import "./styles.scss";

interface Props {
  question: QuestionType;
  deleteQuestion: Function;
  updateQuestion: Function;
}

/**
 * In this component I use formik again to handle the editing of the question.
 * In this case though, the validation approach that I took is using native HTML props.
 * That way I can use the native tooltips that aren't as fancy as MUI, but work and take less space.
 *
 * I also have to use the "enableReinitialize" Formik prop to make sure state change properly rerenders the form.
 *
 * I save the existing values at any editing start, to make sure the cancel button rolls back.
 */

const Question = ({ question, deleteQuestion, updateQuestion }: Props) => {
  const [answerVisible, setAnswerVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const [existingValues, setExistingValues] = useState({
    question: question.question,
    answer: question.answer
  });

  return (
    <div className='question__container'>
      <Formik
        enableReinitialize
        // Sets up our default values
        initialValues={{ question: question.question, answer: question.answer }}
        // Handles our submission
        onSubmit={(values, { setSubmitting }) => {
          updateQuestion({ id: question.id, ...values });
          setSubmitting(false);
          setEditing(false);
        }}
      >
        {props => (
          <Form>
            <div className='question__question-row'>
              <span
                onClick={() => {
                  if (editing) {
                    return;
                  }
                  setAnswerVisible(!answerVisible);
                }}
              >
                <Field
                  pattern='.{3,300}'
                  required
                  title='3 characters minimum'
                  disabled={!editing}
                  name='question'
                  className='question__question-field'
                />
              </span>
              {editing && (
                <div className='question__button-container'>
                  <Tooltip title='Save changes'>
                    <IconButton type='submit'>
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Cancel changes'>
                    <IconButton
                      onClick={() => {
                        props.setFieldValue(
                          "question",
                          existingValues.question
                        );
                        props.setFieldValue("answer", existingValues.answer);
                        setEditing(false);
                      }}
                    >
                      <CancelIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              )}
              {!editing && (
                <div className='question__button-container'>
                  <Tooltip title='Edit question'>
                    <IconButton
                      onClick={() => {
                        setExistingValues(props.values);
                        setAnswerVisible(true);
                        setEditing(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Delete question'>
                    <IconButton onClick={() => deleteQuestion(question.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              )}
            </div>
            {answerVisible && (
              <Field
                pattern='.{1,100}'
                required
                title='3 characters minimum'
                disabled={!editing}
                name='answer'
                className='question__answer-field'
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Question;
