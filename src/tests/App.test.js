/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import Login from '../pages/Login';
import userEvent from '@testing-library/user-event';

describe('Testa a tela de login', () => {
  it('Testa se o logo aparece na tela de login.', () => {
    renderWithRouter(<Login />);
    
    const logoNetflix = screen.getByTestId('logo-netflix');

    expect(logoNetflix).toBeInTheDocument();
    expect(logoNetflix.src).toBe('http://localhost/imageNetflix.png');
  });

  it('Testa se o texto "Entrar" aparece', () => {
    renderWithRouter(<Login />);
    
    const text = screen.getByRole('heading');

    expect(text.innerHTML).toBe('Entrar');
  });

  it('Testa se o input e-mail aparece', () => {
    renderWithRouter(<Login />);
    
    const inputEmail = screen.getByTestId('input-email');

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
    expect(inputEmail).toHaveValue('');
  });

  it('Testa se o input password aparece', () => {
    renderWithRouter(<Login />);
    
    const inputPassword = screen.getByTestId('input-password');

    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword.type).toBe('password');
    expect(inputPassword).toHaveValue('');
  });

  it('Testa se o botão entrar aparece', () => {
    renderWithRouter(<Login />);
    
    const buttonEntrar = screen.getByTestId('button-entrar');

    expect(buttonEntrar).toBeInTheDocument();
    expect(buttonEntrar.type).toBe('button');
    expect(buttonEntrar.innerHTML).toBe('Entrar');
  });

  it('Testa se a senha é checada corretamente e se o redirecionamento é bloqueado quando o valor do input está inválido', () => {
    const { history } = renderWithRouter(<Login />);

    const inputEmail = screen.getByTestId('input-email');
    const inputPassword = screen.getByTestId('input-password');
    const buttonEntrar = screen.getByTestId('button-entrar');
    const { pathname } = history.location;
    const textValidityPassword = screen.getAllByTestId('check-validity');

    expect(textValidityPassword[0]).not.toBeVisible();
    expect(textValidityPassword[1]).not.toBeVisible();

    userEvent.type(inputEmail, 'victor@gmail.com');
    userEvent.type(inputPassword, '123');
    userEvent.click(buttonEntrar);

    expect(pathname).toBe('/');
    expect(textValidityPassword.length).toBe(2);
    expect(textValidityPassword[0]).toBeVisible();
    expect(textValidityPassword[1]).toBeVisible();

  });

  it('Testa se o e-mail é checado corretamente e se o redirecionamento é bloqueado quando o valor do input está inválido', () => {
    const { history } = renderWithRouter(<Login />);

    const inputEmail = screen.getByTestId('input-email');
    const inputPassword = screen.getByTestId('input-password');
    const buttonEntrar = screen.getByTestId('button-entrar');
    const { pathname } = history.location;
    const textValidityPassword = screen.getAllByTestId('check-validity');

    expect(textValidityPassword[0]).not.toBeVisible();
    expect(textValidityPassword[1]).not.toBeVisible();

    userEvent.type(inputEmail, 'vic');
    userEvent.type(inputPassword, '1233232');
    userEvent.click(buttonEntrar);

    expect(pathname).toBe('/');
    expect(textValidityPassword.length).toBe(2);
    expect(textValidityPassword[0]).toBeVisible();
    expect(textValidityPassword[1]).toBeVisible();

  });

  it('Testa se quando o e-mail e asenha são inseridos corretamente, a página é redirecionada para /homepage', () => {
    const { history } = renderWithRouter(<Login />);

    const inputEmail = screen.getByTestId('input-email');
    const inputPassword = screen.getByTestId('input-password');
    const buttonEntrar = screen.getByTestId('button-entrar');
    const textValidityPassword = screen.getAllByTestId('check-validity');

    expect(textValidityPassword[0]).not.toBeVisible();
    expect(textValidityPassword[1]).not.toBeVisible();

    userEvent.type(inputEmail, 'victor@gmail.com');
    userEvent.type(inputPassword, '1233232');
    userEvent.click(buttonEntrar);

    expect(textValidityPassword[0]).not.toBeVisible();
    expect(textValidityPassword[1]).not.toBeVisible();
    expect(history.location.pathname).toBe('/home-page');

  });
});

