import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import './App.css';
import Contact from './pages/Contact';
import ErroNotFound404 from './pages/ErroNotFound404';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends Component {
  render(){
    return(
      <div>
        <header className="header-container">
          <div className='container-logotipo'>
            <img 
              className='img-logotipo'
              src='https://static.vecteezy.com/ti/vetor-gratis/p3/1987871-abstrato-preto-listras-diagonal-fundo-gr%C3%A1tis-vetor.jpg' 
              alt='logotipo'
              width='35px' 
              height= '35px'
            >
            </img>
            <h2 className="title-header">Erick Andrade Dev</h2>
          </div>          
          <nav className="nav-home-links">
            <Link to='/' className="link-header">Home</Link>
            <Link to='/contato' className="link-header">Contato</Link>
            <Link to='/cadastro' className="link-header">Cadastre-se</Link>
            <Link to='/login' className="link-header">Conectar-se</Link>
          </nav>        
        </header>
        <Switch>
          <Route exact path='/' component = { Home }/>
          <Route path='/login' component = { Login } />
          <Route path='/cadastro' component = { Register }/>
          <Route path='/contato' component = { Contact } />
          <Route path='*' component = { ErroNotFound404 }/>
        </Switch>
        <footer className="footer-container">
          <p> Direitos reservados © 2022 Erick, EBA  </p>
        </footer>        
      </div>
    )
  }
}

export default App;
