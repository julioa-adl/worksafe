import React, { useState, useEffect, useRef } from 'react'

import useWindowSize from '../../hooks/useWindowSize';
import useWindowScroll from '../../hooks/useWindowScroll';
// import useInterval from '../../hooks/useInterval';

import equipe from '../../images/equipe.png';

import gestores from '../../utils/object.gestores';

import { FaRegListAlt } from "react-icons/fa";
import { FaRegCaretSquareLeft } from "react-icons/fa";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";

import '../../styles/style.components/historico.css';

function Historico() {
  const [nextDep, setNextDep] = useState(0);
  const [slide, setSlide] = useState('slideUp');
  const [estica, setEstica] = useState('estica');
  const [renderTimer, setRenderTimer] = useState(false);

  const ref = useRef(null);

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    const interval = setInterval(_ => {
      if (nextDep === gestores.length - 1) {
        setNextDep(0);
        setRenderTimer(false)
      } else {
        setNextDep(nextDep + 1);
        setRenderTimer(false)
      }
    }, 5000);
    return _ => clearInterval(interval);
  });

  useEffect(() => {
    setRenderTimer(true);
    const altura = ref.current.getBoundingClientRect().top;
    if (altura > size.height * 0.75) {
      setSlide('slideDown')
      setEstica('diminue')
      return;
    } else {
      setSlide('slideUp');
      setEstica('estica')
      return;
    }
  }, [position, size, renderTimer]);

  const clickNextDep = () => {
    if (nextDep === gestores.length - 1) {
    setNextDep(0);
    } else {
    setNextDep(nextDep + 1);
    };
    setRenderTimer(false)
  };

  const clickPrevtDep = () => {
    if (nextDep === 0) {
      setNextDep(gestores.length - 1);
    } else {
      setNextDep(nextDep - 1);
    };
    setRenderTimer(false)
  };

  return (
    <section
      ref={ ref }
      className="aboutUs_container_main"  
      style={{
        background: `url(${equipe})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="historico_container funcionarios_container">
        <h2
          style={{ animation: `${slide} 2s forwards`, }}
          className="titles">Não Terceirize Problemas, Contrate Soluções!</h2>
        <hr
          style={{ animation: `${estica} 2s forwards`, }}
          className="line_serv"/>
        {/* <h3 className="about">Somos uma empresa especializada em segurança para atividades de alto risco. Com equipes qualificadas há mais de 15 anos no mercado prestando atividades em locais de difícil acesso, altura, espaços confinados e capacitando novos profissionais voltados para a área de segurança do trabalho.
        Atuamos no mercado Industrial com especialização em ZERO acidentes, estatística para a qual voltamos nossa proficiência e damos a força de nosso nome.</h3> */}
        <ul className="historico historico_about">
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
        gestores.filter((gest) => gest.id === nextDep)
          .map((fGest) => (
            <div className="depoiments_container depoiment_funcionarios">
              <div className="depoiment">
              {
                  renderTimer ? (
                    <hr className='timer'/>
                  ) : null
                }
                <h1>{ fGest.name }</h1>
                <span><FaRegListAlt className='icon_aspas'/> Currículo</span>
                <h3>{ fGest.curriculo }</h3>
                {/* <FaQuoteRight className='icon_aspas'/> */}
                <div>
                  <span>{ fGest.cargo }</span>
                  <span> | </span>
                  <span>{ fGest.zona }</span>
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
                className="img_depoiment img_funcionarios"
                style={{
                  background: `url(${fGest.image})`,
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

export default Historico