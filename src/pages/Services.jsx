import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


import HeaderServices from '../sections/services.section/HeaderServices';
import ServicesGrid from '../components/services.components/ServicesGrid';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';
import Whatsapp from '../components/Whatsapp';

import bg_services from '../images/bg-services.svg';


function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <HeaderServices
      tamanho={ 50 }
      bg={ `url(${bg_services})` }
      txt1Color='#222222'
      txt2Color='white'
      objNames={ {name1: 'NOSSOS ', name2: 'SERVIÇOS'} }
      />
      <ServicesGrid/>
      <Footer/>
      <Direitos/>
      <Whatsapp/>
    </div>
  )
}

export default Services