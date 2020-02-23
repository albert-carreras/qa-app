import React from "react";

import Tooltip from "components/Tooltip";

import "./styles.scss";

interface Props {
  children: String;
  tooltipText: String;
}

const Heading = ({ children, tooltipText }: Props) => (
  <div className='heading__container'>
    <Tooltip title={tooltipText}>
      <span className='heading__text'>{children}</span>
    </Tooltip>
  </div>
);

export default Heading;
