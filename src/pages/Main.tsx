import React from "react";
import QuestionList from "containers/QuestionList";
import NewQuestion from "containers/NewQuestion";
import Sidebar from "containers/Sidebar";

import "./styles.scss";

const Main = () => (
  <>
    <h1>Very cool Q&A App</h1>
    <div className='main__container'>
      <div className='main__left'>
        <Sidebar />
      </div>
      <div className='main__right'>
        <QuestionList />
        <hr />
        <NewQuestion />
      </div>
    </div>
  </>
);

export default Main;
