import React, { useEffect, useState, useRef } from 'react';

import { NavLink } from 'react-router-dom';

import {
  servicesDetails,
  img_manutencao,
} from '../../utils/object.services.details';

import useWindowSize from '../../hooks/useWindowSize';
import useWindowScroll from '../../hooks/useWindowScroll';

import '../../styles/style.section/services.sections/servicesGrid.css';

function ServicesGrid() {
  const [slide, setSlide] = useState('slideUp');
  const [estica, setEstica] = useState('estica');
  const [seeMore, setSeeMore] = useState('none');

  const ref = useRef(null);

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    if (size.width > 900) {
      setSeeMore('block');
    }
    const altura = ref.current.getBoundingClientRect().top;
    if (altura > size.height * 0.75) {
      setSlide('slideDown');
      setEstica('diminue');
      return;
    } else {
      setSlide('slideUp');
      setEstica('estica');
      return;
    }   
  }, [position, size]);

  return (
    <section className="grid_services">
      <h2
        ref={ ref }
        style={{ animation: `${slide} 2s forwards`, }}
        className="titles">Serviços</h2>
      <hr
        style={{ animation: `${estica} 2s forwards`, }}
        className="line_serv"/>
      <div className="img_grid_container">
        {
          servicesDetails.map((servs) => (
            <NavLink
              to="/"
              className="img_proj_container img_serv_container"
            >
              <div
                className="img_proj serv_img_grid"    
                style={{
                  background: `url(${servs.cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2 className="proj_text proj_local serv_title">
                  { servs.icon }
                  <br/>
                  { servs.service }
                </h2>
              </div>
            </NavLink>
          ))
        }
      </div>
    </section>
  )
}

export default ServicesGrid;
