import React, { useState, useEffect } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import useWindowScroll from '../../hooks/useWindowScroll';

import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';

import bgHeader_img from '../../images/bg-header-form.png';

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
      id='header'
      className="header_container"
      style={{
        // backgroundColor: '#4e7da6',
        background: `url(${bgHeader_img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50vh"
      }}
    >
      <TopBar/>
      <NavBar/>
      <div className="txt_header_container">
        <h1
          style={{ animation: `${slide} 2s forwards`, }}
          className="stay_safe stay_anime">SOLICITE UM <span className="safe">ORÇAMENTO</span></h1>
      </div>
    </div>
  )
}

export default HeaderAbout