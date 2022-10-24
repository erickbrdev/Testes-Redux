import React, { Component } from "react";
import Input from "../form/Inputs";
import { connect } from "react-redux";
import { loginEmail, loginPassword, loginCheckbox } from "../redux/action/login";
import testReducer from "../redux/reducer/reducerTest";

class Login extends Component {   

 
  handleChangeLogin = (e) => {    
    const { name } = e.target
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [name]:value
    })
} 

  render(){

    const { email, password, checkbox, test } = this.props    
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
            onChange = {(e) => email(e.target.value)}             
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
            onChange = {(e) => password(e.target.value)}       
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
          onChange = {(e) => checkbox(e.target.checked)}   
          type= 'checkbox'
          name = 'checkbox'
          id = 'checkbox-input'                  
        />
        </div>
        <div className="container-btn-login">
          <Input 
            type = 'button'           
            value = 'Conectar-me'
            id = 'button-form-login'
            className = 'btn-login'                     
          />
        </div>        
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    email: (email) => dispatch(loginEmail(email)),
    password: (password) => dispatch(loginPassword(password)),
    checkbox: (checkbox) => dispatch(loginCheckbox(checkbox))
  }
}

// function mapDispatchToProps(dispatch) {
//   const obj = {
//     email: 'foa@foa.com',
//     password:'123',
//     checkbox:false,
//   }  
//   return {
//     test: () => dispatch(testReducer(obj))
//   }
// }

function mapStateToProps(state) {  
  return {
    email: state.loginReducer.email,
    password: state.loginReducer.password,
    checkbox: state.loginReducer.checkbox,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

