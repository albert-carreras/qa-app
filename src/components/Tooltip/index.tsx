import React, { useState } from "react";

import "./styles.scss";

interface Props {
  title: String;
  children: React.ReactElement;
};

/**
 * A tooltip could be built with just CSS,
 * toggling visibility on :hover, but I thought
 * it'd be a bit more representative for an assignment
 * to build it with JS.
 */

const Tooltip = ({ title, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className='tooltip-container'
      data-testid='tooltip'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div data-testid='tooltip-placeholder'>{children}</div>
      {isVisible && (
        <div className='tooltip-content bottom' data-testid='tooltip-content'>
          <span className='tooltip-arrow'></span>
          {title}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
