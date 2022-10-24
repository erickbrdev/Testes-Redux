import { LOGIN_EMAIL, LOGIN_PASSWORD, LOGIN_ERROR, LOGIN_CHECKBOX } from "../action/login" 

const INITIAL_STATE_LOGIN = {
  email:'',
  password:'',
  checkbox:false,
  error: null,  
}

function loginReducer(state = INITIAL_STATE_LOGIN, action){
  switch(action.type){   
    case LOGIN_EMAIL:      
      return { 
        ...state,        
        email: action.payload.email,
        error:null       
      }

    case LOGIN_PASSWORD:    
      return {    
        ...state,     
        password: action.payload.password,
        error:null       
      }  

    case LOGIN_CHECKBOX: {
      return {
        ...state,
        checkbox: action.payload.checkbox,
        error:null
      }
    }  
    
    case LOGIN_ERROR:
      return {
        ...state,
        error:'E-mail ou senha inválido'
      }

    default:
      return state
  }
}

export default loginReducer