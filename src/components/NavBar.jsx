import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import useWindowScroll from '../hooks/useWindowScroll';

import { MdOutlineHome } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdImageSearch } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

import '../styles/style.components/navbar.css';
import logo1 from '../images/Horizontal-Color.png';
import logo2 from '../images/logo branca.png';
import logo3 from '../images/Vertical-Branca.png';

function NavBar() {
  const [actvate, setActvate] = useState("0");
  const [display, setDisplay] = useState("flex")
  const [fade, setFade] = useState("");
  const [xbutton, setXbutton] = useState({
    line1: '',
    line2: '',
    line3: '',
  });
  const [navPosition, setnavPosition] = useState({
    position: '',
    top: '',
    bgColor: '',
    padding: '',
    borderR: '',
    slide: '',
  });
  const [dropDown, setDropDown] = useState(false);

  const size = useWindowSize();
  const heigthEl = useWindowScroll();

  useEffect(() => {
    if (size.width > 1148) {
      setActvate('0');
      setDisplay('flex');
      if (heigthEl > size.height * 0.75) {
        setnavPosition({
          position: 'fixed',
          top: '15px',
          // bgColor: 'rgba(225, 225, 225, 0.2)',
          bgColor: '#222222',
          padding: '20px',
          borderR: '10px',
          slide: 'slideinNav',
        });
    } else {
      setnavPosition({
        position: '',
        top: '',
        bgColor: '',
        padding: '',
        borderR: '',
        slide: '',
      })
    };
    } else {
      setFade("");
      setActvate("100%");
      setXbutton({
        line1: '',
        line2: '',
        line3: '',
      });
      setnavPosition({
        position: '',
        top: '',
        bgColor: '',
        padding: '',
        borderR: '',
        slide: '',
      })
    }
    
  }, [size, heigthEl])

  const mobileNavBar = () => {
    const animeFade = 'navLinkFade 0.5s ease forwards 0.3s';
    const Xstates = {
      line1: 'rotate(-45deg) translate(-8px, 8px)',
      line2: '0',
      line3: 'rotate(45deg) translate(-5px, -7px)',
    };
    if (size.width < 1420) {
      if (actvate === "100%") {
        setDisplay("flex")
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

  const hoverDropDownList = () => {
    setDropDown(dropDown ? false : true)
  };
  
  return (
    <div
      className="navbar_container"
      style={{ position: `${ navPosition.position }`,
      top: `${ navPosition.top }`,
      backgroundColor: `${ navPosition.bgColor }`,
      padding: `${ navPosition.padding }`,
      borderRadius: `${ navPosition.borderR }`,
      animation: `${ navPosition.slide } 2s forwards`}}>
      <h1 className="h1_logo">
        <img className="logo_nav" src={ navPosition.position === 'fixed' ? logo2 : logo1 } alt="logo" />
      </h1>
      <ul
        style={{ transform: `translateX(${actvate})`,
          display: `${display}`, }}
        className="nav_list">
        <img className="logo_nav_mobile" src={ logo3 } alt="logo" />
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
          <NavLink
              className="nav_service" to="/">
            <p
              onMouseEnter={ hoverDropDownList }
              onMouseLeave={ hoverDropDownList }
              className="NL NL_serv">Serviços {
                !dropDown ? <AiFillCaretDown onClick={() => {setDropDown(true)}}/>
                : <AiFillCaretUp onClick={() => {setDropDown(false)}}/>
              }
            {
              dropDown ? (
              <ul className="dropDown_list">
                <li className="NL">Manutenção</li>
                <li className="NL">Bombeiro</li>
                <li className="NL">Resgate</li>
                <li className="NL">Arborismo</li>
                <li className="NL">Treinamentos</li>
              </ul>
              ) : null
            }
            </p>
          </NavLink></li>
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
