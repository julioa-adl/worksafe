import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import HeaderServices from '../sections/services.section/HeaderServices';
import ServicesDetailsSection from '../sections/services.section/ServicesDetailsSection';
import servicesDetails from '../utils/object.services.details';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';

function ServicesDetails({ match }) {
  const service = match.params.id;
  const objServ = servicesDetails.filter((serv) => serv.pathName === service);

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, [service]);
  
  return (
    <div>
      <HeaderServices
        tamanho={ 50 }
        // bg={ `url(${objServ[0].cover})` }
        bg='gray'
        txt1Color='#222222'
        txt2Color='white'
        objNames={ {name1: objServ[0].icon, name2: objServ[0].service} }  />
        <ServicesDetailsSection service={ objServ[0] }/>
        <Footer/>
        <Direitos/>
    </div>
  )
}

export default ServicesDetails