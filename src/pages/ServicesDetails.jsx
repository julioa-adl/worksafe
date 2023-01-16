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
        tamanho={ 60 }
        bg={ objServ[0].cover }
        txt2Color='white'
        objNames={ {name1: '', name2: objServ[0].service} }  />
        <ServicesDetailsSection service={ objServ[0] }/>
        <Footer/>
        <Direitos/>
    </div>
  )
}

export default ServicesDetails