import React, { useState, useEffect, useRef } from 'react'

import equipe from '../images/equipe.webp';

import useWindowSize from '../hooks/useWindowSize';
import useWindowScroll from '../hooks/useWindowScroll';

import depoiments from '../utils/object.depoiment';

import { FaQuoteLeft } from "react-icons/fa";
// import { FaQuoteRight } from "react-icons/fa";
import { FaRegCaretSquareLeft } from "react-icons/fa";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";

import '../styles/style.components/aboutUs.css';

function AboutUs() {
  const [nextDep, setNextDep] = useState(0);
  const [slide, setSlide] = useState('slideUp');
  const [estica, setEstica] = useState('estica');
  const [widthTimer, setWidth] = useState(1);
  const [renderTimer, setRenderTimer] = useState(true);

  const ref = useRef(null);

  const size = useWindowSize();
  const position = useWindowScroll();
  const timing = 5000;

  const timingFunction = (count) => {
    const implement = (wid, t) => {
      setTimeout(() => {
        setWidth(wid);
      }, t / 100);
    };

    for (let i = 1; i <= 100; i += 1) {
      implement(i, count);
    }
    setWidth(1);
  }

  useEffect(() => {
    const interval = setInterval(_ => {
      if (nextDep === depoiments.length - 1) {
        setNextDep(0);
        timingFunction(timing);
        setRenderTimer(false);
      } else {
        setNextDep((prev) => prev += 1);
        timingFunction(timing);
        setRenderTimer(false);
      }
    }, timing);
    return _ => clearInterval(interval);
  });

  useEffect(() => {
    const altura = ref.current.getBoundingClientRect().top;
    if (altura > size.height * 0.75) {
      setSlide('slideDown');
      setEstica('diminue');
      return;
    } else {
      setSlide('slideUp');
      setEstica('estica');
      return;
    }
  }, [position, size]);

  useEffect(() => {
    timingFunction(timing);
    setRenderTimer(true);
  }, [renderTimer])

  const clickNextDep = () => {
    if (nextDep === depoiments.length - 1) {
    setNextDep(0);
    } else {
    setNextDep(nextDep + 1);
    };
    setRenderTimer(false);
    setWidth(1);
  };

  const clickPrevtDep = () => {
    if (nextDep === 0) {
      setNextDep(depoiments.length - 1);
    } else {
      setNextDep(nextDep - 1);
    };
    setRenderTimer(false);
    setWidth(1);
  };

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
      <div className="historico_container">
        <h2
          ref={ ref }
          style={{ animation: `${slide} 2s forwards`, }}
          className="titles">Não Terceirize Problemas, Contrate Soluções!</h2>
        <hr
          style={{ animation: `${estica} 2s forwards`, }}
          className="line_serv"/>
        <h3 className="about">Somos uma empresa especializada em segurança para atividades de alto risco. Com equipes qualificadas há mais de 15 anos no mercado prestando atividades em locais de difícil acesso, altura, espaços confinados e capacitando novos profissionais voltados para a área de segurança do trabalho.
        Atuamos no mercado Industrial com especialização em ZERO acidentes, estatística para a qual voltamos nossa proficiência e damos a força de nosso nome.</h3>
        <ul className="historico">
            <li>
              <h1>+400</h1>
              <h3>Obras Concluídas</h3>
            </li>
            <li>
              <h1>+15</h1>
              <h3>Anos de Experiência</h3>
            </li>
            <li>
              <h1>+60</h1>
              <h3>Profissionais Qualificados</h3>
            </li>
            <li>
              <h1>0</h1>
              <h3>Acidentes</h3>
            </li>
        </ul>
      </div>
      {
        depoiments.filter((dep) => dep.id === nextDep)
          .map((fDep) => (
            <div key={`depoim${ fDep.name }`} className="depoiments_container">
              <div className="depoiment">
              {
                  renderTimer ? (
                <hr 
                  style={{
                    width: `${widthTimer}%`,
                    transitionDuration: `${timing / 1000}s`
                  }}
                  className='timer'
                />
                ) : null
              }
                <h1>{ fDep.client }</h1>
                <FaQuoteLeft className='icon_aspas'/>
                <h3>{ fDep.depoiment }</h3>
                {/* <FaQuoteRight className='icon_aspas'/> */}
                <div>
                  <span>{ fDep.name }</span>
                  <span> | </span>
                  <span>{ fDep.cargo }</span>
                </div>
                <div className="btn_dep_container">
                  <button
                    onClick={ clickPrevtDep }
                    className="btn_dep"><FaRegCaretSquareLeft/></button>
                  <button
                    onClick={ clickNextDep }
                    className="btn_dep"><FaRegCaretSquareRight/></button>
                </div>
                <GoTriangleRight className='icon_triangle'/>
              </div>
              <div
                className="img_depoiment"
                style={{
                  background: `url(${fDep.image})`,
                  // backgroundSize: "cover",
                  // backgroundPosition: "center",
                  // backgroundRepeat: "no-repeat",
                }}
              />
            </div>

          ))
      }
    </section>
  )
}

export default AboutUs