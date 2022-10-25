import React from "react";

export default class Input extends React.Component {
  render(){
    const { type, name, value,  onChange, placeholder, className, onClick, test } = this.props
    return(
      <div className="input-container">
        <input 
          required          
          data-testid = { test }
          type={ type } 
          name= { name }
          value= { value }
          onChange= { onChange }
          placeholder= { placeholder }
          className= { className }
          onClick = { onClick }
        />
      </div>
    )
  }
}