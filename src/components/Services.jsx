import React, { useEffect, useState, useRef } from 'react';

import alpinists from '../images/alpinists.png';
import services from '../utils/object.services';

import useWindowSize from '../hooks/useWindowSize';
import useWindowScroll from '../hooks/useWindowScroll';

import '../styles/style.components/services.css';

function Services() {
  const [renderServ, setRenderServ] = useState(0);
  const [slide, setSlide] = useState('slideUp');
  const [estica, setEstica] = useState('estica');

  const ref = useRef(null);

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    const altura = ref.current.getBoundingClientRect().top;
    if (altura > size.height * 0.75) {
      setSlide('slideDown')
      setEstica('diminue')
      return;
    } else {
      setSlide('slideUp');
      setEstica('estica')
      return;
    }  
  }, [position, size]);

  const handleClickServ = ({ target }) => {
    const id = target.id;
    setRenderServ(id);
    console.log(target)
  };

  return (
    <section
      className="services_container_main"
      style={{
      background: `url(${alpinists})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <h2
        ref={ ref }
        style={{ animation: `${slide} 2s forwards`, }}
        className="titles">Serviços</h2>
      <hr
        style={{ animation: `${estica} 2s forwards`, }}
        className="line_serv"/>
      <div className="container_serv">
        <div className="btns_container">
          {
            services.map((serv) => (
              <button
                id={ serv.id }
                className="btn_services"
                key={ serv.service }
                onClick={ handleClickServ }
                style={{
                  backgroundColor: `${serv.id === Number(renderServ) ? "#f44336" : ''}`,
                }}
              ><div id={ serv.id } className="div_bt_vazia"/>
                { serv.icon }
                { serv.service }
              </button>
            ))
          }
        </div>
        {
          services.filter((serv) => serv.id === Number(renderServ))
            .map((thisServ) => (
              <div key={ thisServ.id } className="container_article_img">
                <article>
                  <h1>{ thisServ.title }</h1>
                  <p>{ thisServ.text }</p>
                  <span className='continue_text'>...</span>
                </article>
                <div
                  className="img_serv"
                  style={{
                    background: `url(${thisServ.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            ))
        }
      </div>
    </section>
  )
}

export default Services;
