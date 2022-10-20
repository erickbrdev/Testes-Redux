import React, { Component } from "react";
import Input from "../form/Inputs";

class Register extends Component {
  render() {
    return(
      <form className="form-register">
        <div>
          <h1>Cadastre-se!</h1>
        </div>
        <div className="infos-register">
          <label>
            <p className="label-register">Digite seu nome</p>
           <Input 
            type = 'name'
            name = 'name'
            placeholder = 'Digite seu nome'
            className = 'input-register'
           />
          </label>         
        </div>
        <div className="infos-register">
        <label>
            <p className="label-register">Digite seu email</p>
           <Input 
            type = 'email'
            name = 'email'
            placeholder = 'Digite seu email'
            className = 'input-register'
           />
          </label> 
        </div>
        <div className="infos-register">
        <label className="label-checkbox">
            <p className="label-register">Pessoa Fisica</p>
           <Input 
            type = 'checkbox'
            name = 'checkbox'        
            className = 'input-register'    
           />
          </label> 
          <label className="label-checkbox">
            <p className="label-register">Pessoa Júridica</p>
           <Input 
            type = 'checkbox'
            name = 'checkbox'     
            className = 'input-register'       
           />
          </label> 
        </div>
        <div className="infos-register">
        <label>
            <p className="label-register">Digite sua senha</p>
           <Input 
            type = 'password'
            name = 'password'
            placeholder = 'Digite sua senha' 
            className = 'input-register'           
           />
          </label> 
          <label>
            <p className="label-register">Confirme sua senha</p>
           <Input 
            type = 'password'
            name = 'password'
            placeholder = 'Digite sua senha'  
            className = 'input-register'          
           />
          </label> 
        </div>
        <div className="infos-register">
        <label>
            <p className="label-register">Digite seu CPF</p>
           <Input 
            type = 'text'
            name = 'text'
            placeholder = 'Digite seu CPF' 
            className = 'input-register'           
           />
          </label> 
        </div>
        <div className="infos-register">
        <label>
            <p className="label-register">Digite seu CEP</p>
           <Input 
            type = 'text'
            name = 'text'
            placeholder = 'Digite seu CEP'  
            className = 'input-register'          
           />
          </label> 
        </div>
        <div className="infos-register">
        <label className="container-checkbox" htmlFor="'input-checkbox-register'">
            <p className="label-register">Eu li e concordo com os termos de uso</p>           
        </label> 
        <Input 
            type = 'checkbox'
            name = 'checkbox'
            id = 'input-checkbox-register'                                  
           />
        </div>
      </form>
    )
  }
}

export default Register