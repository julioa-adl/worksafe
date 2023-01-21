import React from 'react';
import { NavLink } from 'react-router-dom';

import logo_branca from '../images/Vertical-Branca.png';

import { BsPinMap } from "react-icons/bs";
import { BsEnvelopeOpen } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import servicesDetails from '../utils/object.services.details';

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
        {
          servicesDetails.map((servs) => (
            <li key={`footerServ${ servs.service }`}>
              <span>
                <NavLink  className="links_uteis_links" to={ `/servicos/${servs.pathName}` }>
                  { servs.service }
                </NavLink>
              </span>
            </li>
          ))
        }
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
            <p className="contact_parag">(81) 4042-3097</p>
          </div>
        </div>
        <div className='conect_footer'>
          <span className="span_topbar" >Conecte-se Conosco</span>
          <a target="blank" href="https://www.facebook.com/worksafeserv/"><BsFacebook className="social_icon" /></a>
          <a target="blank" href="https://www.instagram.com/worksafe_brasil/"><BsInstagram className="social_icon" /></a>
          <a target="blank" href="https://www.linkedin.com/company/worksafeservicos/"><BsLinkedin className="social_icon" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer