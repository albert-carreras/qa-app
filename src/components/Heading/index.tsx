import React from "react";

import Tooltip from "components/Tooltip";

import "./styles.scss";

const Heading = ({ children, tooltipText }) => {
  return (
    <div className='heading__container'>
      <Tooltip title={tooltipText}>
        <span className='heading__text'>{children}</span>
      </Tooltip>
    </div>
  );
};

export default Heading;
