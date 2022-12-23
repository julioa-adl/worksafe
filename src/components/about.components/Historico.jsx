import React, { useState, useEffect } from 'react'

import equipe from '../../images/equipe.png';

import depoiments from '../../utils/object.depoiment';

import { FaQuoteLeft } from "react-icons/fa";
import { FaRegCaretSquareLeft } from "react-icons/fa";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";

import '../../styles/style.components/historico.css';

function Historico() {
  const [nextDep, setNextDep] = useState(0);

  const clickNextDep = () => {
    if (nextDep === depoiments.length - 1) {
      setNextDep(0);
    } else {
      setNextDep(nextDep + 1);
    };
  };

  const clickPrevtDep = () => {
    if (nextDep === 0) {
      setNextDep(depoiments.length - 1);
    } else {
      setNextDep(nextDep - 1);
    };
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
          className="titles">Não Terceirize Problemas, Contrate Soluções!</h2>
        <hr className="line_serv"/>
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
        depoiments.filter((dep) => dep.id === nextDep)
          .map((fDep) => (
            <div className="depoiments_container">
              <div className="depoiment">
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
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>

          ))
      }
    </section>
  )
}

export default Historico