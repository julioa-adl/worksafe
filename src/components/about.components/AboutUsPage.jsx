import React from 'react';

import odenis from '../../images/odenis.webp'

import '../../styles/style.components/aboutUsPages.css';

function AboutUsPage() {
  return (
    <div>
      <section className="main_section_1 about_main">
        <div className='about_div_txt'>
          <h1>QUEM SOMOS:</h1>
          <p
            // style={{ animation: `${slide} 3s forwards`, }}
          >Somos uma empresa especializada em segurança para atividades de alto risco!<br/>
          Fundada pelo nosso Diretor e CEO <span style={{color: "#BEFF25"}}>Odenis Mesquita</span> com sua vasta experiência de projetos anteriores na área de segurança, mas agora com maior foco e direcionamento as nossas missões, visões e valores.</p>

          <p>
          Com equipes qualificadas há mais de <span style={{color: "#BEFF25"}}>15 anos no mercado</span> prestando atividades  em locais de <span style={{color: "#BEFF25"}}>difícil acesso</span>, altura, espaços confinados e <span style={{color: "#BEFF25"}}>capacitando</span> novos profissionais voltados para a área de segurança do trabalho.</p>

          <p>
          Trabalhamos com foco na <span style={{color: "#BEFF25"}}>Manutenção Industrial</span>, utilizando de nossa proficiência como suporte em <span style={{color: "#BEFF25"}}>segurança do trabalho</span> nas atividades do dia-a-dia de nossos clientes.
          </p>
        </div>
        <div
          className='odenis'
          style={{
            background: `url(${odenis})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>
    </div>
  )
}

export default AboutUsPage;
