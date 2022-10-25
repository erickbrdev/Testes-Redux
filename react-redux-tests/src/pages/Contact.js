import React, { Component } from "react";
import Input from "../form/Inputs";

class Contact extends Component {
  render(){
    return(
      <div className="div-contact">        
        <div className="div-img-container">
          <h1 className="title-contact">Deseja entrar em contato?</h1>         
        </div>   
        <form className="form-contact">
          <div className="container-contact-infos">
            <p className="label-contact">Nome</p>
            <Input 
              test  = 'input-name-contact'
              type = 'text'
              name = 'text'
              placeholder = 'Digite seu nome'
              id = 'name-contact'
              className = 'name-contact'
            />
            <p className="label-contact">E-mail</p>
            <Input 
              test  = 'input-email-contact'
              type = 'email'
              name = 'email'
              placeholder = 'Digite seu email'
              id = 'email-contact'
              className = 'email-contact'
            />
          </div>        
          <h1 className="subtitle-contact">Envie sua mensagem!</h1>
          <textarea
          data-testid = 'textarea'
          cols='50'
          rows = '10'
          >
          </textarea>
          <Input 
            type = 'button'
            name = 'button'
            value = 'Enviar'
            id = 'button-contact'
            className = 'btn-contact'
          />
        </form>  
        <h2 className="title-contact-links">Você também pode entrar em contato pelas redes sociais! 🚀</h2>   
        <section className="section-contact">          
          <p className="listItem"> <a  className="rede" href="https://github.com/Erick-Andrade-Dev" target="_blank">GitHub  😸</a></p>            
          <p className="listItem"> <a  className="rede" href="https://www.instagram.com" target="_blank"> Instagram 📷</a></p>         
          <p className="listItem"> <a className="rede" href="https://www.facebook.com/login/" target="_blank" >Facebook  👤 </a></p>    
          <p className="listItem"> <a className="rede" href="https://www.linkedin.com/in/erick-andrade-76a960241/" target="_blank"> LinkedIn 👨🏽‍💻</a> </p>      
        </section>          
      </div>
    )
  }
}

export default Contact










/* <img 
alt="Logotipo"
className="img-contact" 
src= 'https://static.vecteezy.com/ti/vetor-gratis/p3/1987871-abstrato-preto-listras-diagonal-fundo-gr%C3%A1tis-vetor.jpg' /> */