import React, { useEffect } from 'react';


import HeaderServices from '../sections/services.section/HeaderServices';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';
import notfound from '../images/notfound.webp';
import Whatsapp from '../components/Whatsapp';

import '../styles/style.section/notfound/notfound.css'

function My404Component() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='notfound'>
      <Whatsapp/>
      <HeaderServices
        tamanho={ 110 }
        bg={ `url(${notfound})` }
        txt1Color='gray'
        txt2Color='white'
        objNames={ {name1: 'PAGE NOT ', name2: 'FOUND'} }
      />
      <Footer/>
      <Direitos/>
    </div>
  )
}

export default My404Component