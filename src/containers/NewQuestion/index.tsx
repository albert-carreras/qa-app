import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Heading from "components/Heading";
import { questionActions } from "state/question";

import "./styles.scss";

// Types
import { Dispatch } from "redux";
import { CreateQuestion } from "state/question/types";
import { Question as QuestionType } from "types/common.d";
interface Props {
  createQuestion: Function;
}

/**
 * This container uses Formik to handle the new question form.
 * I also added the Delay checkbox.
 */

const NewQuestion = ({ createQuestion }: Props) => (
  <div>
    <Heading tooltipText='Here you can find the created questions and their answers'>
      Create a new question
    </Heading>
    <div className='form'>
      <Formik
        // Sets up our default values
        initialValues={{ question: "", answer: "", delay: false }}
        // Validates our data
        validate={values => {
          const errors: { question?: string; answer?: string } = {};

          if (!values.question) {
            errors.question = "Required field";
          } else if (values.question.length < 3) {
            errors.question = "The question should be longer than 3 characters";
          }

          if (!values.answer) errors.answer = "Required field";

          return errors;
        }}
        // Handles our submission
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Remove delay from request
          const { delay, ...question } = values;
          if (delay) {
            setTimeout(() => {
              createQuestion(question);
              setSubmitting(false);
            }, 5000);
          } else {
            createQuestion(question);
            setSubmitting(false);
            resetForm();
          }
        }}
      >
        {props => (
          <Form>
            <div className='new-question__field'>
              <TextField
                variant='outlined'
                label='Question'
                name='question'
                fullWidth
                margin='normal'
                placeholder='Write your question here'
                value={props.values.question}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                helperText={props.errors.question ? props.errors.question : ""}
                error={props.touched.question && Boolean(props.errors.question)}
              />
            </div>
            <div className='new-question__field'>
              <TextField
                variant='outlined'
                label='Answer'
                fullWidth
                name='answer'
                rows='3'
                multiline
                margin='normal'
                helperText={props.errors.answer ? props.errors.answer : ""}
                error={props.touched.answer && Boolean(props.errors.answer)}
                placeholder='Write your answer here'
                value={props.values.answer}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
            </div>
            <div className='new-question__submit-button-group'>
              <Button
                type='submit'
                color='primary'
                variant='contained'
                disabled={props.isSubmitting}
              >
                Create Question
              </Button>
              <FormControlLabel
                control={
                  <Checkbox
                    name='delay'
                    value='delay'
                    onChange={props.handleChange}
                    checked={props.values.delay}
                  />
                }
                label='Add Delay'
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch<CreateQuestion>) => ({
  createQuestion: (question: QuestionType) =>
    dispatch(questionActions.createQuestion(question))
});

export default connect(null, mapDispatchToProps)(NewQuestion);
