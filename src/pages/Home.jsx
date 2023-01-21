import React, { useEffect } from 'react';
import ReactGA from 'react-ga';


import Header from '../sections/Header';
import Main from '../sections/Main';
import Footer from '../sections/Footer';
import Direitos from '../components/Direitos';
import Whatsapp from '../components/Whatsapp';

import '../styles/style.pages/home.css';

function Home({ match }) {
  const url = match.path;

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="home">
      <Header path={ url }/>
      <Main />
      <Footer/>
      <Direitos/>
      <Whatsapp/>
    </div>
  );
};

export default Home;
