import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';

import { MdOutlineHome } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdImageSearch } from "react-icons/md";

import '../styles/navbar.css';
import logo from '../images/Horizontal-Color.png';

function NavBar() {
  const [actvate, setActvate] = useState("0");
  const [fade, setFade] = useState("");
  const [xbutton, setXbutton] = useState({
    line1: '',
    line2: '',
    line3: '',
  });
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 1148) {
      setActvate('0');
    } else {
      setFade("");
      setActvate("100%");
      setXbutton({
        line1: '',
        line2: '',
        line3: '',
      })
    }
  }, [size])

  const mobileNavBar = () => {
    const animeFade = 'navLinkFade 0.5s ease forwards 0.3s';
    const Xstates = {
      line1: 'rotate(-45deg) translate(-8px, 8px)',
      line2: '0',
      line3: 'rotate(45deg) translate(-5px, -7px)',
    };
    if (size.width < 1420) {
      if (actvate === "100%") {
        setFade(animeFade);
        setActvate("0");
        setXbutton({
          line1: Xstates.line1,
          line2: Xstates.line2,
          line3: Xstates.line3,
        })
        return;
      } if (actvate === "0") {
        setFade("");
        setActvate("100%");
        setXbutton({
          line1: '',
          line2: '',
          line3: '',
        })
        return;
      };
    }
  };
  
  return (
    <div className="navbar_container">
      <h1 className="h1_logo">
        <img className="logo_nav" src={ logo } alt="logo" />
      </h1>
      <ul
        style={{ transform: `translateX(${actvate})`, }}
        className="nav_list">
        <li style={{ animation: `${ fade }`, }}>
          { size.width < 1148
          ? (<MdOutlineHome className="mobile_icons" />)
          : ("")
          }
          <NavLink className="NL" to="/">Home</NavLink></li>
        <li style={{ animation: `${ fade }`, }}>
          { size.width < 1148
          ? (<MdGroups className="mobile_icons" />)
          : ("")
          }
          <NavLink className="NL" to="/">Sobre Nós</NavLink></li>
        <li style={{ animation: `${ fade }`, }}>
          { size.width < 1148
          ? (<MdOutlineMiscellaneousServices className="mobile_icons" />)
          : ("")
          }
          <NavLink className="NL" to="/">Serviços</NavLink></li>
        <li style={{ animation: `${ fade }`, }}>
          { size.width < 1148
          ? (<MdImageSearch className="mobile_icons" />)
          : ("")
          }
          <NavLink className="NL" to="/">Portifólio</NavLink></li>
      </ul>
      <button className="bttn_fale" type="click">Fale Conosco</button>
      <div onClick={ mobileNavBar } className="mobile_menu">
        <div style={{ transform: `${ xbutton.line1 }`, }} className="line1"></div>
        <div style={{ opacity: `${ xbutton.line2 }`, }} className="line2"></div>
        <div style={{ transform: `${ xbutton.line3 }`, }} className="line3"></div>
      </div>
    </div>
  );
};

export default NavBar;
