import React from 'react';

import HeaderAbout from '../sections/about.sections/HeaderAbout';
import AboutUsPage from '../components/about.components/AboutUsPage'
// import AboutUs from '../components/AboutUs';
import Historico from '../components/about.components/Historico';
import Mission from '../components/about.components/Mission';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';
import Whatsapp from '../components/Whatsapp';

function About() {
  return (
    <div>
      <HeaderAbout/>
      <AboutUsPage/>
      <Mission/>
      <Historico/>
      <Footer/>
      <Direitos/>
      <Whatsapp/>
    </div>
  )
}

export default About;
