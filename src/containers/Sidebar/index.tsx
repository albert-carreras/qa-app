import React from "react";
import { connect } from "react-redux";

import { questionSelectors } from "state/question";

import "./styles.scss";

// Types
import { State } from "types/state.d";
interface Props {
  questionCount: number;
}

const Sidebar = ({ questionCount }: Props) => {
  const getSidebarQuestionAmountText = () => {
    const amount = questionCount > 0 ? questionCount : "no";
    const questionString = questionCount === 1 ? "question" : "questions";

    return `Here you can find ${amount} ${questionString}.`;
  };

  return (
    <div className='sidebar__container'>
      <span>{getSidebarQuestionAmountText()}</span>
      <span>Feel free to create your own questions!</span>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  questionCount: questionSelectors.getQuestionCount(state)
});
export default connect(mapStateToProps)(Sidebar);
