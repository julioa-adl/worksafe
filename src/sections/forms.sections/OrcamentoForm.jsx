import React, { useState, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import form_orc_img from '../../images/form_orc_img.png'
import '../../styles/style.section/orcamento.sections/orcamentoForm.css';
import TelefoneBrasileiroInput from "react-telefone-brasileiro";

function OrcamentoForm() {
  const [isDisabled, setDisable] = useState(true);
  const [telefone, setTelefone] = useState("");
  const [formInputs, setform] = useState({
    name: '',
    cliente: '',
    email: '',
    detalhes: '',
  });

  useEffect(() => {
    const emailRegex = /\S+@\S+\.\S+/;
    // const phineRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

    const {name, cliente, email, detalhes } = formInputs;
    if (!name || !cliente || !email || !detalhes
      || !emailRegex.test(email)
      ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [formInputs]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setform((prevstate) => ({
      ...prevstate,
      [id]: value,
    }));
  }

  const bttnSubmit = (e) => {
    e.preventDefault();
    const {name, cliente, email, detalhes } = formInputs;

    const objParams = {
      from_name: name,
      cliente,
      email,
      contato: telefone,
      message: detalhes,
    }

    emailjs.send('service_wg232de', 'template_87mfrom', objParams, '0X2dmmRd891eeM98J')
    .then((response) => {
      setform({
        name: '',
        cliente: '',
        email: '',
        detalhes: '',
      });
      setTelefone('')
      alert('mensagem enviada')
    }, (err) => {
      console.log('erro no envio' + err)
    })

  }

  return (
    <div className='div_container_form'>
      <form className='form_orcamento'>
        <h1 className='titles'>NOS EXPLIQUE SUA DEMANDA</h1>
        <label>
          *Nome:
          <input
            onChange={ handleChange }
            id="name"
            type="text"
            placeholder="Nome Completo"
            className="input_form_orc"
            value={formInputs.name}
            required
          />
        </label>

        <label>
          *Cliente:
          <input
            onChange={ handleChange }
            id="cliente"
            type="text"
            placeholder="Empresa"
            className="input_form_orc"
            value={formInputs.cliente}
          />
        </label>

        <label>
          *Email:
          <input
            onChange={ handleChange }
            id="email"
            type="email"
            placeholder="ex: exemplo@exemplo.com.br"
            className="input_form_orc"
            value={formInputs.email}
            required
          />
        </label>

        <label>
          *Contato:
          <TelefoneBrasileiroInput
            value={telefone}
            onChange={(ev) => setTelefone(ev.target.value)}
            separaNono
            temDDD
            separaDDD
            placeholder="(xx) x xxxx-xxxx"
            className="input_form_orc"
          />
          {/* <input
            onChange={ handleChange }
            id="contato"
            type="text"
            placeholder="xx 9xxxx-xxxx"
            className="input_form_orc"
            value={formInputs.contato}
            required
          /> */}
        </label>

        <label>
          *Detalhes:
          <textarea
            onChange={ handleChange }
            id="detalhes"
            type="text"
            placeholder="Sua Solicitação Aqui"
            className="input_form_orc txtArea_orc"
            value={formInputs.detalhes}
          />
        </label>

        <button
          className='bttn_env_orc'
          onClick={ bttnSubmit }
          type="submit"
          disabled={ isDisabled }
          style={ isDisabled ? { opacity: '10%' } : {} }
        >
          Enviar
        </button>
      </form>
      <div
        className='img_orc'
        style={{
          background: `url(${form_orc_img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  )
}

export default OrcamentoForm