import React, { useEffect } from 'react'
import ReactGA from 'react-ga';


import HeaderOrcamento from '../sections/forms.sections/HeaderOrcamento';
import OrcamentoForm from '../sections/forms.sections/OrcamentoForm';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';
import Whatsapp from '../components/Whatsapp';

function Orcamento() {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <HeaderOrcamento/>
      <OrcamentoForm/>
      <Footer/>
      <Direitos/>
      <Whatsapp/>
    </div>
  )
}

export default Orcamento