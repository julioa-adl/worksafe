import React, { useState, useEffect } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import useWindowScroll from '../../hooks/useWindowScroll';

import TopBar from '../../components/TopBar';
import NavBar from '../../components/NavBar';

function HeaderServices({ tamanho, bg, objNames, txt1Color, txt2Color, path}) {
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
      className="header_container header_container_services"
      style={{
        background: `${bg}`,
        height: `${tamanho}vh`,
      }}
    >
      <TopBar/>
      <NavBar propBgColor={'#222222'} logo={'white'} path={ path }/>
      <div className="txt_header_container">
        <h1
          style={{ 
            animation: `${slide} 2s forwards`,
            color: `${ txt1Color }`,
          }}
          className="stay_safe stay_anime txt_services">{ objNames.name1 }
          <span
            className="safe txt_services"
            style={{
              color: `${ txt2Color }`
            }}
          >{ ` ${objNames.name2}` }</span></h1>
      </div>
    </div>
  )
}

export default HeaderServices;
