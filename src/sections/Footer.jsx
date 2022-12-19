import React from 'react'

import logo_branca from '../images/Vertical-Branca.png';

import { BsPinMap } from "react-icons/bs";
import { BsEnvelopeOpen } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

import '../styles/style.section/footer.css';

function Footer() {
  return (
    <div className="footer_container">
      <div className="resumo">
        <h1>SOBRE NÓS</h1>
        <img src={ logo_branca } alt="logo"/>
        <p>Somos uma empresa de manutenção de alto risco, voltada para o setor industrial. Atuamos em locais de difícil acesso, com total segurança e proficiência.</p>
      </div>
      <div className="links_uteis">
        <h1>LINKS ÚTEIS</h1>
        <ul>
          <li>Manutenção Industrial</li>
          <li>Gestão de Riscos</li>
          <li>Bombeiro Civil</li>
          <li>Limpeza de Silos</li>
          <li>Treinamentos</li>
        </ul>
      </div>
      <div className="infos_contato">
        <h1>CONTATOS</h1>
        <div className="contacts">
          <BsPinMap className="icon_contact"/>
          <div className="contact_divs">
            <h3 className="contact_title">Visite-nos</h3>
            <p className="contact_parag">Rod. BR-101 Sul, N 1781, Galpão H</p>
          </div>
        </div>
        <div className="contacts">
          <BsEnvelopeOpen className="icon_contact"/>
          <div className="contact_divs">
            <h3 className="contact_title">Mande um Email</h3>
            <p className="contact_parag">comercial@worksafebrasil.com.br</p>
          </div>
        </div>
        <div className="contacts">
          <BsTelephone className="icon_contact"/>
          <div className="contact_divs">
            <h3 className="contact_title">Fale Conosco</h3>
            <p className="contact_parag">(81) 3264-1592</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer