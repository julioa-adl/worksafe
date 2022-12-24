import React, { useEffect, useState, useRef } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import useWindowScroll from '../../hooks/useWindowScroll';

import { FiTarget } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiStar } from "react-icons/fi";

function Mission() {
  const [slide, setSlide] = useState('slideUp');

  const ref = useRef(null);

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    const altura = ref.current.getBoundingClientRect().top;
    // console.log(size.height + 'tela')
    // console.log(altura + 'altura')
    if (altura > size.height * 0.75) {
      setSlide('slideDown')
      return;
    } else {
      setSlide('slideUp');
      return;
    }   
  }, [position, size]);

  return (
    <section 
      ref={ ref }
      className="main_section_2">
        <div
          style={{ animation: `${slide} 2.5s forwards`, }}
          className="cards_div">
          <FiTarget className="icons_cards" />
          <h1>MISSÃO</h1>
          <p>Prestar serviços de manutenção e segurança do trabalho em ambientes de risco com o mais alto padrão de segurança e qualidade.</p>
        </div>
        <div
          style={{ animation: `${slide} 2.5s forwards`, }}
          className="cards_div">
          <FiEye className="icons_cards" />
          <h1>VISÃO</h1>
          <p>Ser reconhecida como referência na área de manutenção e segurança do trabalho em todo o nordeste.</p>
        </div>
        <div
          style={{ animation: `${slide} 2.5s forwards`, }}
          className="cards_div">
          <FiStar className="icons_cards" />
          <h1>VALORES</h1>
          <p>Prezar pela ética no trabalho, sempre visando agir de forma íntegra para com seus clientes internos, externos e fornecedores.</p>
        </div>
      </section>
  )
}

export default Mission