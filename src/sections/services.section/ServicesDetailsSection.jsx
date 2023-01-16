import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../../styles/style.section/services.sections/servicesDetails.css';
import { Carousel } from 'react-responsive-carousel';

function ServicesDetailsSection({ service }) {
  return (
    <div className="grid_services">
      <h2 className="titles">{ service.title }</h2>
      <hr className="line_serv"/>
      <div className='details_container'>
        <div className='txt_details_container'>
          <h1 className='titles'>DETALHES:</h1>
          <p className='txt_service'>{ service.text }</p>
          <h1 className='titles'>LISTA DE SERVIÇOS:</h1>
          <ul className='list_service'>
            {
              service.listServ.map((serv) => (
                <li>{ serv }</li>
              ))
            }
          </ul>
        </div>
        <Carousel
          className='carousel'
          autoPlay
          infiniteLoop 
        >
          {
            service.images.map((img) => (
              <div>
                <img src={ service.descriptImg(img) } alt=''/>
              </div>
            ))
          }
        </Carousel>
      </div>

    </div>
  )
}

export default ServicesDetailsSection