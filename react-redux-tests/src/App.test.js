import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from './App';
import Contact from './pages/Contact';

describe('Verificando a renderização dos componentes na página Home', () => {
  it('Verificando a renderização do menu de navegação', () => {
    const {history} =  renderWithRouterAndRedux(<App/>)

    const logotipo = screen.getByRole('img', {
      name: /logotipo/i
    })

    const name = screen.getByRole('heading', {
      name: /erick andrade dev/i
    })

    const home = screen.getByRole('link', {
      name: /home/i
    })

    const contact = screen.getByRole('link', {
      name: /contato/i
    })

    const register = screen.getByRole('link', {
      name: /cadastre\-se/i
    })

    const login =  screen.getByRole('link', {
      name: /conectar\-se/i
    })

    expect(logotipo).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(register).toBeInTheDocument();
    expect(login).toBeInTheDocument();
  })

  it('Verifica a renderização do carrossel de imagens', () => {
    const {history} =  renderWithRouterAndRedux(<App/>)

    const imgBeach = screen.getByRole('img', {
      name: /praia/i
    })

    const imgNature = screen.getByRole('img', {
      name: /natureza/i
    })

    const imgDog = screen.getByRole('img', {
      name: /cachorro/i
    })

    expect(imgNature).toBeInTheDocument();
    expect(imgDog).toBeInTheDocument();
    expect(imgBeach).toBeInTheDocument();
  })

  it('Verifica a renderização do componente Footer', () => {
    const { history } = renderWithRouterAndRedux(<App />)

    const footer = screen.getByText(/direitos reservados © 2022 erick, eba/i)

    expect(footer).toBeInTheDocument();
  })
})

describe('Verifica a renderização do componente Contato', () => {  
  const initialState = {
    loginReducer: {
      email:"",
      password:"",
      checkbox:false,
      error:null,
  }
}
  it('Verifica a renderização do title', () => {
    const { history } = renderWithRouterAndRedux(<Contact />, initialState, ['/contato'])

    const titleContact = screen.getByRole('heading', {
     name: /deseja entrar em contato\?/i
   })
 
   expect(titleContact).toBeInTheDocument();
  })

  
})