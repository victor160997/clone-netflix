/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import HomePage from '../pages/HomePage';
import { items, list } from './data';
import { renderImage } from '../pages/FunctionsHp';

describe('Testa se os elementos corretos aparecem na Home Page', () => {
  it('Testa a função que chama a API e se as categorias são renderizadas na tela.', async () => {
  
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(list),
    }));

    renderWithRouter(<HomePage />);
  
    const originaisNetflix = await screen.findByText('Originais da Netflix');
    const recomendados = await screen.findByText(/Recomendados/i);
    const emAlta = await screen.findByText(/Em alta/i);
    const acao = await screen.findByText(/Ação/i);
    const comedia = await screen.findByText(/Comédia/i);
    const terror = await screen.findByText(/Terror/i);
    const romance = await screen.findByText(/Romance/i);
    const documentario = await screen.findByText(/Documentários/i);

    expect(originaisNetflix).toBeInTheDocument();
    expect(recomendados).toBeInTheDocument();
    expect(emAlta).toBeInTheDocument();
    expect(acao).toBeInTheDocument();
    expect(comedia).toBeInTheDocument();
    expect(terror).toBeInTheDocument();
    expect(romance).toBeInTheDocument();
    expect(documentario).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(8);
  });

  it('Testa se a função renderImage funciona corretamente', () => {

    const mockRenderImage = jest.fn(renderImage);

    mockRenderImage(items);
    expect(mockRenderImage).toHaveBeenCalled();
    expect(mockRenderImage).toHaveBeenCalledTimes(1);
    expect(mockRenderImage).toHaveBeenCalledWith(items);
    expect(mockRenderImage(items).length).toBe(2);
    expect(mockRenderImage(items)[0].props.src).toBe('https://image.tmdb.org/t/p/w200key-da-image1');
    expect(mockRenderImage(items)[1].props.src).toBe('https://image.tmdb.org/t/p/w200key-da-image2');
  })
});

