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
        <label className="label-radio">            
           <Input 
            type = 'radio'
            name = 'radio'        
            className = 'input-register'    
           />
           <p className="label-register">Pessoa Fisica</p>
          </label> 
          <label className="label-radio">            
           <Input 
            type = 'radio'
            name = 'radio'     
            className = 'input-register'       
           />
           <p className="label-register">Pessoa Júridica</p>
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
        <label className="container-radio" htmlFor="'input-radio-register'">
            <p className="label-register">Eu li e concordo com os termos de uso</p>           
        </label> 
        <Input 
            test = 'radio'
            type = 'radio'
            name = 'radio'
            id = 'input-radio-register'                                  
           />
        </div>
      </form>
    )
  }
}

export default Register