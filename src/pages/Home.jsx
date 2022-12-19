import React from 'react';

import Header from '../sections/Header';
import Main from '../sections/Main';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';

import '../styles/style.pages/home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
      <Footer/>
      <Direitos/>
    </div>
  );
};

export default Home;
