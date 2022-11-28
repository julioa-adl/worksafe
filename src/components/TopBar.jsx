import React from 'react';
import { Link } from 'react-router-dom';

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import '../styles/style.components/topbar.css';


function TopBar() {
  return (
    <div className="topbar_container">
      <span className="span_topbar" >Conecte-se Conosco</span>
      <a target="blank" href="https://www.facebook.com/worksafeserv/"><BsFacebook className="social_icon" /></a>
      <a target="blank" href="https://www.instagram.com/worksafe_brasil/"><BsInstagram className="social_icon" /></a>
      <a target="blank" href="https://www.linkedin.com/company/worksafeservicos/"><BsLinkedin className="social_icon" /></a>
    </div>
  );
};

export default TopBar;