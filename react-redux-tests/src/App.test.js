import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event'
import App from './App';
import Contact from './pages/Contact';
import Register from './pages/Register'

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
  it('Verifica a renderização do titulo', () => {
    const { history } = renderWithRouterAndRedux(<Contact />, initialState, ['/contato'])

    const titleContact = screen.getByRole('heading', {
     name: /deseja entrar em contato\?/i
   })
 
   expect(titleContact).toBeInTheDocument();
  })

  it('Verifica a renderização dos campos de input', () => {
    const { history } = renderWithRouterAndRedux(<Contact />, initialState, ['/contato'])

    const name_input = screen.getByTestId('input-name-contact')
    const email_input = screen.getByTestId('input-email-contact')
    const textarea = screen.getByTestId('textarea')
    const btn_enviar = screen.getByRole('button', {
      name: /enviar/i
    })

    expect(name_input).toBeInTheDocument();
    expect(email_input).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
    expect(btn_enviar).toBeInTheDocument();
  })
  
  it('Verifica a renderização das redes socias para contato', () => {
    const { history } = renderWithRouterAndRedux(<Contact />, initialState, ['/contato'])

    const github = screen.getByRole('link', {
      name: /github 😸/i
    })

    const instagram = screen.getByRole('link', {
      name: /instagram 📷/i
    })

    const facebook = screen.getByRole('link', {
      name: /facebook 👤/i
    })

    const linkedin = screen.getByRole('link', {
      name: /linkedin 👨🏽‍💻/i
    })

    expect(github).toBeInTheDocument();
    expect(instagram).toBeInTheDocument();
    expect(facebook).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
  })    
})

describe('Verifica a renderização do componente Cadastra-se', () => {
  const initialState = {
    loginReducer: {
      email:"",
      password:"",
      checkbox:false,
      error:null,
  }
}

  it('Verifica a renderização do titulo', () => {
    const { history } = renderWithRouterAndRedux(<Register />, initialState, ['/cadastro'])

    const title = screen.getByRole('heading', {
      name: /cadastre\-se!/i
    })

    expect(title).toBeInTheDocument();
  })


  it('Verifica a renderização dos inputs para o recebimento de informação', () => {
    const { history } = renderWithRouterAndRedux(<Register />, initialState, ['/cadastro'])

    const input_name = screen.getByRole('textbox', {
      name: /digite seu nome/i
    })

    const input_email = screen.getByRole('textbox', {
      name: /digite seu email/i
    })

    const input_radioPF = screen.getByRole('radio', {
      name: /pessoa fisica/i
    })

    const input_radioPJ = screen.getByRole('radio', {
      name: /pessoa júridica/i
    })

    const password = screen.getByLabelText(/digite sua senha/i)

    const confirm_password = screen.getByLabelText(/confirme sua senha/i)

    const cpf = screen.getByRole('textbox', {
      name: /digite seu cpf/i
    })

    const cep = screen.getByRole('textbox', {
      name: /digite seu cep/i
    })

    const radio_confirm = screen.getByTestId('radio');

    expect(input_name).toBeInTheDocument();
    expect(input_email).toBeInTheDocument();
    expect(input_radioPF).toBeInTheDocument();
    expect(input_radioPJ).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirm_password).toBeInTheDocument();
    expect(cpf).toBeInTheDocument();
    expect(cep).toBeInTheDocument();
    expect(radio_confirm).toBeInTheDocument();
  })  
})