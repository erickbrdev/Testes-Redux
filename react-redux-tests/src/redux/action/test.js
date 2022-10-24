const LOGIN_TESTE = 'LOGIN_TESTE'

const loginTest = (state) => {
  console.log(state)
  return {
    type: LOGIN_TESTE,
    payload: {
      email: state.email,
      password: state.password,
      checkbox: state.checkbox,
    }
  }
}

export {
  LOGIN_TESTE,
  loginTest,
}