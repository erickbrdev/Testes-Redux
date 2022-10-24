import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import testReducer from './reducerTest';

const rootReducer = combineReducers ({
  loginReducer,  
})

export default rootReducer;