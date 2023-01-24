import React from 'react';

import HeaderServices from '../sections/services.section/HeaderServices';
import Footer from '../sections/Footer';
import notfound from '../images/notfound.webp'

import '../styles/style.section/notfound/notfound.css'

function My404Component() {
  return (
    <div className='notfound'>
      <HeaderServices
        tamanho={ 110 }
        bg={ `url(${notfound})` }
        txt1Color='gray'
        txt2Color='white'
        objNames={ {name1: 'PAGE NOT ', name2: 'FOUND'} }
      />
      <Footer/>
    </div>
  )
}

export default My404Component