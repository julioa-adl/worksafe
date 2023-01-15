import React from 'react';

import HeaderServices from '../sections/services.section/HeaderServices';
import ServicesGrid from '../components/services.components/ServicesGrid';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';
import Whatsapp from '../components/Whatsapp';

import bg_services from '../images/bg-services.png';


function Services() {
  return (
    <div>
      <HeaderServices tamanho={ 40 } bg={ bg_services } objNames={ {name1: 'NOSSOS ', name2: 'SERVIÇOS'} } />
      <ServicesGrid/>
      <Footer/>
      <Direitos/>
      <Whatsapp/>
    </div>
  )
}

export default Services