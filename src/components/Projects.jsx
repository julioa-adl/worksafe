import React, { useEffect, useState } from 'react'

import projects from '../utils/object.projects';

import useWindowSize from '../hooks/useWindowSize';
import useWindowScroll from '../hooks/useWindowScroll';

import { BsFilterCircle } from "react-icons/bs";

import '../styles/style.components/projects.css';

function Projects() {
  const [slide, setSlide] = useState('slideUp');
  const [estica, setEstica] = useState('estica');
  const [seeMore, setSeeMore] = useState('none');

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    // console.log(position)
    if (size.width > 900) {
      setSeeMore('block');
      if (position < 2000) {
        setSlide('slideDown')
        setEstica('diminue')
        return;
      } if (position > 2000) {
        setSlide('slideUp');
        setEstica('estica')
        return;
      };
    } else {
      if (position < 1900) {
        setSlide('slideDown')
        setEstica('diminue')
        return;
      } if (position > 1900) {
        setSlide('slideUp');
        setEstica('estica')
        return;
      };
    };    
  }, [position, size]);

  const ExpandseeMore = () => {
    if (seeMore === 'none') {
      setSeeMore('block');
    } else {
      setSeeMore('none');
    }
  };

  return (
    <section className="projects_container_main">
      <h2
        style={{ animation: `${slide} 2s forwards`, }}
        className="titles">Projetos</h2>
      <hr
        style={{ animation: `${estica} 2s forwards`, }}
        className="line_serv"/>
      <div className="img_grid_container">
        {
          projects.map((proj) => (
            <div
              className="img_proj_container"
              style={{
                display: `${proj.id > 3 ? seeMore : "" }` }}
            >
              <div
                className="img_proj"    
                style={{
                  background: `url(${proj.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3 className="proj_text proj_title">{ proj.title }</h3>
                <h2 className="proj_text proj_local">{ proj.local }</h2>
              </div>
            </div>
          ))
        }
      </div>
        {
          size.width < 900 ? (
            <button
              className="btn_seeMore"
              onClick={ ExpandseeMore }
            >{seeMore === 'none'? 'Ver Mais' : 'Ver Menos'} <BsFilterCircle/></button>
          )
          : null
        }
    </section>
  )
}

export default Projects;
