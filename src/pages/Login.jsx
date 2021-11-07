/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import logoNetflix from '../components/imageNetflix.png';
import { LoginPage } from './LoginStyles';
import backNetflix from './netflixBack.png';

export default function Login() {

  // gerencia a informação se o usuário logou ou não
  const [log, setLog] = useState(false);

  // gerencia a validade das informações do usuário
  const [validity, setValidity] = useState(true);

  // gerencia as informações do usuário
  const [usuario, setusuario] = useState({
    email: '',
    password: ''
  });

  // função que lida com as alterações no input
  const handleChange = ({ target }) => {
    // verificação se as informações inseridas são válidas
    if(usuario.email.length > 5 || usuario.password.length > 4) {
      setValidity(true);
    }
    setusuario({
      ...usuario,
      [target.name]: target.value
    });
  }

  const { email, password } = usuario;

  // se as informações forem válidas, lida com o botão "entrar" e faz
  // o redirecionamento para a homepage
  const handleSubmit = () => {
    /* const { history } = props; */
    if(usuario.email.length < 5 || usuario.password.length < 4) {
      setValidity(false);
    } else {
      /* history.push('/homepage'); */
      setLog(true)
    }
  }

  return (
    <LoginPage
      background={ backNetflix }
      validity={ validity }
    >
      <img
        src={ logoNetflix }
        alt="netflix"
        data-testid="logo-netflix"
      />
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
              data-testid="input-email"
            />
            <p data-testid="check-validity">Informe um email ou número de telefone válido.</p>
            <input
              type="password"
              value={ password }
              name="password"
              placeholder="Senha"
              onChange={ (e) => handleChange(e) }
              data-testid="input-password"
            />
            <p data-testid="check-validity">A senha deve ter entre 4 e 60 caracteres.</p>
            <button
              type="button"
              onClick={ handleSubmit }
              data-testid="button-entrar"
            >
              Entrar
            </button>
          </form>
        </section>
      </div>
      { log && <Redirect to="/home-page" /> }
    </LoginPage>
  )
}
