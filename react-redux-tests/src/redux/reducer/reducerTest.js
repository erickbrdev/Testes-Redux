import { LOGIN_TESTE } from "../action/test";

const initalState = {
  email: '',
  password: '',
  checkbox: false,
}

function testReducer(state = initalState, action) {
  switch(action.type){

    case LOGIN_TESTE: 
      return {
        email: action.payload.email,
        password: action.payload.password,
        checkbox: action.payload.checkbox,
      }

    default: {
      return state;
    }
  }
}

export default testReducer;