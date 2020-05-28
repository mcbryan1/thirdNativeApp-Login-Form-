import {createStore} from 'redux';
import authReducer from './Reducers/authReducer'




let store = createStore(authReducer)


export default store;