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
      if (position < 3100) {
        setSlide('slideDown')
        setEstica('diminue')
        return;
      } if (position > 3100) {
        setSlide('slideUp');
        setEstica('estica')
        return;
      };
    } else {
      if (position < 2900) {
        setSlide('slideDown')
        setEstica('diminue')
        return;
      } if (position > 2900) {
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
      <ul className="historico">
          <li>
            <h1>+400</h1>
            <h3>Obras Concluídas</h3>
          </li>
          <li>
            <h1>15</h1>
            <h3>Anos de Experiência</h3>
          </li>
          <li>
            <h1>60</h1>
            <h3>Profissionais Qualificados</h3>
          </li>
          <li>
            <h1>0</h1>
            <h3>Acidentes</h3>
          </li>
      </ul>
    </section>
  )
}

export default AboutUs