import React, { useEffect, useState } from 'react';
import Services from '../components/Services';
import Projects from '../components/Projects';
import AboutUs from '../components/AboutUs';

import useWindowSize from '../hooks/useWindowSize';
import useWindowScroll from '../hooks/useWindowScroll';

import '../styles/style.section/main.css'

import { BsShieldCheck } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsLightning } from "react-icons/bs";


function Main() {
  const [slide, setSlide] = useState('slideUp');
  const [estica, setEstica] = useState('estica');

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    if (size.width > 600) {
      if (position < 200) {
        setSlide('slideDown')
        setEstica('diminue')
        return;
      } if (position > 150) {
        setSlide('slideUp');
        setEstica('estica')
        return;
      };
    } else {
      if (position < 10) {
        setSlide('slideDown')
        setEstica('diminue')
        return;
      } if (position > 11) {
        setSlide('slideUp');
        setEstica('estica')
        return;
      };
    };
  }, [position, size]);

  return (
    <div className="main">
      <section className="main_section_1">
        <h2 
          style={{ animation: `${slide} 2s forwards`, }}
        >NÃO VENDEMOS SEGURANÇA, NÓS A PRATICAMOS!</h2>
        <hr
          style={{ animation: `${estica} 2s forwards`, }}
          className="line"/>
        <p
          style={{ animation: `${slide} 3s forwards`, }}
        >Somos uma empresa especializada em segurança para atividades de alto risco.
        Com equipes qualificadas há mais de 15 anos no mercado prestando atividades  em locais de difícil acesso, altura, espaços confinados e capacitando novos profissionais voltados para a área de segurança do trabalho.
        </p>
      </section>
      <section className="main_section_2">
        <div
          style={{ animation: `${slide} 2.5s forwards`, }}
          className="cards_div">
          <BsShieldCheck className="icons_cards" />
          <h1>SEGURANÇA</h1>
          <p>Com zero acidentes em nossa história, sempre seguimos com a segurança em primeiro lugar, senda a marca que carregamos em nosso nome.</p>
        </div>
        <div
          style={{ animation: `${slide} 2.5s forwards`, }}
          className="cards_div">
          <BsGear className="icons_cards" />
          <h1>PROFISSIONAL</h1>
          <p>Equipes capacitadas para os mais diversos cenários de risco. Trabalhamos na constante evolução de nossos colaboradores com as mais modernas técnicas.</p>
        </div>
        <div
          style={{ animation: `${slide} 2.5s forwards`, }}
          className="cards_div">
          <BsStar className="icons_cards" />
          <h1>EXPERIÊNCIA</h1>
          <p>À mais de 15 anos no mercado trabalhando com atividades de alto risco, possuímos um portifólio de serviços feitos que asseguram nossas capacidades técnicas.</p>
        </div>
        <div
          style={{ animation: `${slide} 2.5s forwards`, }}
          className="cards_div">
          <BsLightning className="icons_cards" />
          <h1>AGILIDADE</h1>
          <p>Possuímos um sistemas de acompanhamento diário de obras que são compartihados com nossos clientes através de relatórios de todas as atividades executadas.</p>
        </div>
      </section>
      <Services />
      <Projects />
      <AboutUs />
    </div>
  )
}

export default Main