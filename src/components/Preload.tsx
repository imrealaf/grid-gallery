import React, { useEffect, useState, useRef } from "react";

import config from '../constants/config';
import Preloader from './Preloader';

const Preload: React.FC = () => {

  const ref = useRef() as any;
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      ref.current.style.opacity = 0;
      setTimeout(() => {
        setShow(false);
      }, 300);
    }, config.preload.delayTime);
  }, [])

  return show ?
    <div className="preload" ref={ref}>
      <Preloader />
    </div>
    : null

};

export default Preload;
