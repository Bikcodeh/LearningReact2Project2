import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from './../constants/index';

//El primer argumento del handleActions son las acciones y el segundo es un estado inicial
export const customers = handleActions({
    [FETCH_CUSTOMERS]: state => state,
}, {});