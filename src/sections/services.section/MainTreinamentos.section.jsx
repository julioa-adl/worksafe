import React from 'react';

import '../../styles/style.section/services.sections/mainTreinamentos.css';

function MainTreinamentos() {
  return (
    <div className="main-treinamentos">
      <h1 className='title-page-trein'>O QUE SÃO AS FORMAÇÕES?</h1>
      <p className='p-page-trein'>São cursos que irão preparar você para as mais diversas situações e ambientes de riscos.<br/> Você irá aprender com quem vive isso no dia-a-dia!</p>
      <ul className='ul-page-trein'>
        <li>
          <h3>Trabalhador</h3>
          <p>Aprenda de maneira prática e com vivências próximas da realidade e dê os primeiros passos rumo a execução segura de suas atividades.</p>
        </li>
        <li>
          <h3>Supervisor</h3>
          <p>Elaborado por especialistas para que você conheça as normas e as principais técnicas da segurança do trabalho de uma maneira completa.</p>
        </li>
        <li>
          <h3>Reciclagens</h3>
          <p>Nossos cursos e conteúdos estão em constante atualização, e aqui você consegue fazer suas reciclagens sempre com os conteúdos mais atuais.</p>
        </li>
      </ul>
    </div>
  )
}

export default MainTreinamentos;