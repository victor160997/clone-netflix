/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import logoNetflix from '../components/imageNetflix.png';
import { LoginPage } from './styles';
import backNetflix from './netflixBack.png';

export default function Login(props) {

  const [validity, setValidity] = useState(true);

  const [usuario, setusuario] = useState({
    email: '',
    password: ''
  });

  const handleChange = ({ target }) => {
    if(usuario.email.length > 5 || usuario.password.length > 4) {
      setValidity(true);
    }
    setusuario({
      ...usuario,
      [target.name]: target.value
    });
  }

  const { email, password } = usuario;

  const handleSubmit = () => {
    const { history } = props;
    if(usuario.email.length < 5 || usuario.password.length < 4) {
      setValidity(false);
    } else {
      history.push('/homepage');
    }
  }

  return (
    <LoginPage
      background={ backNetflix }
      validity={ validity }
    >
      <img src={ logoNetflix } alt="netflix" />
      <div>

        <section>
          <h1>Entrar</h1>
          <form>
            <input
              type="email"
              value={ email }
              name="email"
              placeholder="Email ou número de telefone"
              onChange={ (e) => handleChange(e) }
            />
            <p>Informe um email ou número de telefone válido.</p>
            <input
              type="password"
              value={ password }
              name="password"
              placeholder="Senha"
              onChange={ (e) => handleChange(e) }
            />
            <p>A senha deve ter entre 4 e 60 caracteres.</p>
            <button
              type="button"
              onClick={ handleSubmit }
            >
              Entrar
            </button>
          </form>
        </section>
      </div>
    </LoginPage>
  )
}
