import React, { useState, useEffect } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import useWindowScroll from '../../hooks/useWindowScroll';

import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';

import bgHeader_img from '../../images/bg-header-form.webp';

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
      className="header_container header_orc"
      style={{
        // backgroundColor: '#4e7da6',
        background: `url(${bgHeader_img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60vh",
      }}
    >
      <TopBar/>
      <NavBar  propBgColor={''} logo={'white'}/>
      <div className="txt_header_container">
        <h1
          style={{ animation: `${slide} 2s forwards`, }}
          className="stay_safe stay_anime">SOLICITE UM <span className="safe">ORÇAMENTO</span></h1>
        <h1
        style={{ animation: `${slide} 2.5s forwards`, }}
        className="stay_safe_2 stay_anime white">SOLICITE UM <span className="safe_2 white">ORÇAMENTO</span></h1>
        <h1
        style={{ animation: `${slide} 3s forwards`, }}
        className="stay_safe_3 stay_anime white">SOLICITE UM <span className="safe_3 white">ORÇAMENTO</span></h1>
      </div>
    </div>
  )
}

export default HeaderAbout