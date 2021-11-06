import React, { useState } from 'react';
import logoNetflix from '../components/imageNetflix.png';
import { LoginPage } from './styles';
import backNetflix from './netflixBack.png';

export default function Login() {

  const [usuario, setusuario] = useState({});

  const handleChange = ({ target }) => {
    setusuario({
      ...usuario,
      [target.name]: target.value
    });
  }

  const { email, password } = usuario;

  return (
    <LoginPage background={ backNetflix }>
      <img src={ logoNetflix } alt="netflix" />
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
          <input
            type="password"
            value={ password }
            name="password"
            placeholder="Senha"
            onChange={ (e) => handleChange(e) }
          />
        </form>
      </section>
    </LoginPage>
  )
}
