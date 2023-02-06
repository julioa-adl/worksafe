import React from 'react';

import { AiFillSafetyCertificate } from "react-icons/ai";
import courses from '../../utils/object.treinamentos';

function CursosDetails() {
  return (
    <section className='cursos-details'>
      <h3>Formações WorkSafe _</h3>
      <h1>Veja as formações<br/> que temos disponíveis:</h1>
      <div className='cursos-list'>
        <div className='container-course-icon'>
          <AiFillSafetyCertificate className='course-icon'/>
        </div>
        <h1>TREINAMENTOS</h1>
        <div className='container-cards-courses'>
          {
            courses.map((course) => (
              <div key={`cardscourse${course.id}`} className='card-course'>
                <div>
                  <h2>
                  { course.icon }
                  <span> </span>
                  { course.course }
                  </h2>
                  <span>{ course.category }</span>
                  <span> - </span>
                  <span>{ course.horas }</span>
                  <h3>{ course.valor }</h3>
                </div>
                <p>{ course.descricao }</p>
                <button
                  type='click'
                  className='bttn-inscrevase'
                  target="blank"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://wa.link/kfn26g'
                    }}
                >Inscreva-se</button>
              </div>
            ))
          }
        </div>
      </div>
  </section>
  )
}

export default CursosDetails