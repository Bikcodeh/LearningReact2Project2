import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER } from './../constants/index';

//El primer argumento del handleActions son las acciones y el segundo es un estado inicial
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload],
    //En el payload del action va a estar la promise
    [INSERT_CUSTOMER]: (state, action) => [ ...state, action.payload]
}, []);