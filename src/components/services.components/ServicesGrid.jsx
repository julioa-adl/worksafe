import React from 'react';

import { NavLink } from 'react-router-dom';

import servicesDetails from '../../utils/object.services.details';

import '../../styles/style.section/services.sections/servicesGrid.css';

function ServicesGrid() {
  return (
    <section className="grid_services">
      <h2
        className="titles">Categorias</h2>
      <hr
        className="line_serv"/>
      <div className="img_grid_container">
        {
          servicesDetails.map((servs) => (
            <NavLink
              key={ `servDet${ servs.service }`}
              to={ `/servicos/${servs.pathName}` }
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
