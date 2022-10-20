import React, { Component } from "react";
import Input from "../form/Inputs";

class Login extends Component {
  render(){
    return(
      <form className="form-login">
        <div>
          <h1 className="title-form-login"> Faça seu login! </h1>
        </div>
        <div className="input-form">
          <label htmlFor="email-input">
              <p className="label-inputs">Digite seu email</p>
          </label>
          <Input 
            type = 'email'
            name = 'email'
            id = 'email-input'
            placeholder = 'Digite seu email'
            className= 'class-input'
          />
        </div>
        <div className="input-form">
          <label htmlFor="password-input">
            <p className="label-inputs">Digite sua senha</p>
          </label>
          <Input
            type= 'password'
            name = 'password'
            id = 'password-input'
            placeholder = 'Digite sua senha'
            className= 'class-input'
          />          
        </div>
        <div className="input-form">
        <label htmlFor="checkbox-input">
          <p className="label-inputs">Mantenha-me conectado</p>
        </label>
        <Input 
          type= 'checkbox'
          name = 'checkbox'
          id = 'checkbox-input'                  
        />
        </div>
        <div className="container-btn-login">
          <Input 
            type = 'button'
            name = 'button'
            value = 'Conectar-me'
            id = 'button-form-login'
            className = 'btn-login'
          />
        </div>        
      </form>
    )
  }
}

export default Login