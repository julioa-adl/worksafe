import React from 'react'

import { IoLogoWhatsapp } from "react-icons/io";

import '../styles/style.components/whatsapp.css';

function Whatsapp() {
  return (
    <a
      className='whatsapp'
      target="blank"
      href="https://wa.me/5581992275570?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento%21">
      <IoLogoWhatsapp className='wpp_icon'/>
    </a>
  )
}

export default Whatsapp;
