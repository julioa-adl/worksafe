import React from 'react';

import HeaderServices from '../sections/services.section/HeaderServices';
import MainTreinamentos from '../sections/services.section/MainTreinamentos.section';
import CursosDetails from '../sections/services.section/CursosDetails';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';
import bg from '../images/bg-header-treinamentos.webp'

function Treinamentos() {
  return (
    <div>
      <HeaderServices
      tamanho={ 60 }
      bg={ `url(${bg})` }
      // bg='gray'
      txt1Color='#BEFF25'
      txt2Color='white'
      objNames={ {name1: 'Formações e', name2: 'Cursos de Segurança.'} }
      />
      <MainTreinamentos />
      <CursosDetails />
      <Footer/>
      <Direitos />
    </div>
  )
}

export default Treinamentos