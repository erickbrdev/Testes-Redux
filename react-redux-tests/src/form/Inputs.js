import React from "react";

export default class Input extends React.Component {
  render(){
    const { type, name, value,  onChange, placeholder, className } = this.props
    return(
      <div className="input-container">
        <input 
          required
          type={ type } 
          name= { name }
          value= { value }
          onChange= { onChange }
          placeholder= { placeholder }
          className= { className }
        />
      </div>
    )
  }
}