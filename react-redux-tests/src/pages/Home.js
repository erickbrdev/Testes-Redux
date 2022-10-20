import React, { Component } from "react";

class Home extends Component {
  render(){
    return(
      <div className="container-main-home">
        <section className="home-section"> 
        <div className="container-image"> 
          <div className="galery-wrap">
            <div className="galery"> 
            <img src="https://source.unsplash.com/random/753x350/?beach" alt="Praia" className="item atual"/>   
                  <img src="https://source.unsplash.com/random/753x350/?nature" alt="Natureza" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?animal" alt="Animal" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?night" alt="Noite" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?world" alt="Mundo" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?europa" alt="Europa" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?asia" alt="Asia" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?brazil" alt="Brasil" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?predios" alt="Macaco" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?dog" alt="Cachorro" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?cat" alt="Gato" className="item"/>
                  <img src="https://source.unsplash.com/random/753x350/?pets" alt="Pet" className="item"/> 
            </div>
          </div>
        </div>
      </section>      
    </div>
    )
  }
}

export default Home