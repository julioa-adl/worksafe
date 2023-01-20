import React, { useState, useEffect } from 'react';
import '../styles/style.section/header.css';

import useWindowSize from '../hooks/useWindowSize';
import useWindowScroll from '../hooks/useWindowScroll';

import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

import industria_img from '../images/header.svg';

function Header() {
  const [slide, setSlide] = useState('slideout');

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    if (size.width > 600) {
      if (position < 380) {
        return setSlide('slidein');
      } if (position > 380) {
        return setSlide('slideout');
      };
    } else {
      if (position < 200) {
        return setSlide('slidein');
      } if (position > 210) {
        return setSlide('slideout');
      };
    };
  }, [position, size]);

  return (
    <header id='header' className="header_container"
    style={{
      background: `url(${industria_img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <TopBar/>
      <NavBar propBgColor={ '' }/>
      <div className="txt_header_container">
        <h1
          style={{ animation: `${slide} 2s forwards`, }}
          className="stay_safe stay_anime">Stay <span className="safe">Safe,</span> Work <span className="safe">Safe.</span></h1>
        <h1
        style={{ animation: `${slide} 2.5s forwards`, }}
        className="stay_safe_2 stay_anime">Stay <span className="safe_2">Safe,</span> Work <span className="safe_2">Safe.</span></h1>
        <h1
        style={{ animation: `${slide} 3s forwards`, }}
        className="stay_safe_3 stay_anime">Stay <span className="safe_3">Safe,</span> Work <span className="safe_3">Safe.</span></h1>
      </div>

      {/* <h3 >Não vendemos segurança, nós a praticamos!</h3> */}
    </header>
  );
};

export default Header;
