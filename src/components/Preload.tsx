import React, { useEffect, useState, useRef } from "react";

import config from "../constants/config";
import { onTransitionEnd } from "../utils";
import symbol from "../images/logo-symbol.png";

const Preload: React.FC = () => {
  // Ref to DOM element
  const ref = useRef() as any;

  // Visibility state
  const [show, setShow] = useState(true);

  /* 
    On mount, create preload effect
  */
  useEffect(() => {
    // After specified delay, run this code ..
    setTimeout(() => {
      // Animate element out ..
      ref.current.style.opacity = 0;

      // When animation complete, set state to remove from DOM
      onTransitionEnd(ref.current, () => {
        setShow(false);
      });
    }, config.preload.delayTime);
  }, [ref]);

  return show ? (
    <div className="preload" ref={ref}>
      <img className="logo" src={symbol} alt="Preload logo" />
    </div>
  ) : null;
};

export default Preload;
