const LOGIN_EMAIL= 'LOGIN_EMAIL'
const LOGIN_PASSWORD= 'LOGIN_PASSWORD'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGIN_CHECKBOX = 'LOGIN_CHECKBOX'


const loginEmail = (email) => {  
  return {   
    type: LOGIN_EMAIL,
    payload: {
      email,      
  }
 }
} 

const loginPassword = (password) => {
  return {
    type: LOGIN_PASSWORD,
    payload: {
      password,
    }
  }
}

const loginCheckbox = (checkbox) => {
  return {
    type: LOGIN_CHECKBOX,
    payload: {
      checkbox
    }
  }
}

export {
  LOGIN_EMAIL,
  LOGIN_ERROR, 
  LOGIN_PASSWORD,
  LOGIN_CHECKBOX, 
  loginEmail,
  loginPassword,
  loginCheckbox,
}
