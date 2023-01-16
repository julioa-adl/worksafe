import React from 'react';

import HeaderServices from '../sections/services.section/HeaderServices';
import ServicesDetailsSection from '../sections/services.section/ServicesDetailsSection';
import servicesDetails from '../utils/object.services.details';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';

function ServicesDetails({ match }) {
  const service = match.params.id;
  const objServ = servicesDetails.filter((serv) => serv.pathName === service);
  
  return (
    <div>
      <HeaderServices
        tamanho={ 50 }
        // bg={ objServ[0].cover }
        bg='#222222'
        txt1Color='#BEFF25'
        txt2Color='#BEFF25'
        objNames={ {name1: objServ[0].icon, name2: objServ[0].service} }  />
        <ServicesDetailsSection service={ objServ[0] }/>
        <Footer/>
        <Direitos/>
    </div>
  )
}

export default ServicesDetails