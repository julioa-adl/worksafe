import React, { useState, useEffect } from 'react'

import equipe from '../images/equipe.png';

import useWindowSize from '../hooks/useWindowSize';
import useWindowScroll from '../hooks/useWindowScroll';

import '../styles/style.components/aboutUs.css';

function AboutUs() {
  const [slide, setSlide] = useState('slideUp');
  const [estica, setEstica] = useState('estica');

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    if (size.width > 600) {
      if (position < 1100) {
        setSlide('slideDown')
        setEstica('diminue')
        return;
      } if (position > 1100) {
        setSlide('slideUp');
        setEstica('estica')
        return;
      };
    } else {
      if (position < 900) {
        setSlide('slideDown')
        setEstica('diminue')
        return;
      } if (position > 900) {
        setSlide('slideUp');
        setEstica('estica')
        return;
      };
    };    
  }, [position, size]);

  return (
    <section
    className="aboutUs_container_main"    
    style={{
      background: `url(${equipe})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    >
      <h2
        style={{ animation: `${slide} 2s forwards`, }}
        className="titles">Não Terceirize Problemas, Contrate Soluções!</h2>
      <hr
        style={{ animation: `${estica} 2s forwards`, }}
        className="line_serv"/>
    </section>
  )
}

export default AboutUs