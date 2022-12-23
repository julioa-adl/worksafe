import React, { useState, useEffect } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import useWindowScroll from '../../hooks/useWindowScroll';

import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';

import industria_img from '../../images/header.png';

function HeaderAbout() {
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
    <div
      className="header_container"
      style={{
        background: `url(${industria_img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "70vh"
      }}
    >
      <TopBar/>
      <NavBar/>
      <div className="txt_header_container">
        <h1
          style={{ animation: `${slide} 2s forwards`, }}
          className="stay_safe stay_anime">QUEM <span className="safe">SOMOS</span></h1>
        <h1
        style={{ animation: `${slide} 2.5s forwards`, }}
        className="stay_safe_2 stay_anime">QUEM <span className="safe_2">SOMOS</span></h1>
        <h1
        style={{ animation: `${slide} 3s forwards`, }}
        className="stay_safe_3 stay_anime">QUEM <span className="safe_3">SOMOS</span></h1>
      </div>
    </div>
  )
}

export default HeaderAbout