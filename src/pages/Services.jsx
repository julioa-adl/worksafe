import React from 'react';

import HeaderServices from '../sections/services.section/HeaderServices';
import ServicesGrid from '../components/services.components/ServicesGrid';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';
import Whatsapp from '../components/Whatsapp';

function Services() {
  return (
    <div>
      <HeaderServices tamanho={ 60 } />
      <ServicesGrid/>
      <Footer/>
      <Direitos/>
      <Whatsapp/>
    </div>
  )
}

export default Services