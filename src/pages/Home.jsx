import React from 'react';
import '../styles/header.css';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

import industria_img from '../images/header.png';

function Home() {
  return (
    <header className="header_container"
    style={{
      background: `url(${industria_img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <TopBar/>
      <NavBar/>
    </header>
  );
};

export default Home;
