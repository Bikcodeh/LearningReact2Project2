import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from './../constants/index';

//El primer argumento del handleActions son las acciones y el segundo es un estado inicial
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload],
    //En el payload del action va a estar la promise
    [INSERT_CUSTOMER]: (state, action) => [ ...state, action.payload],
    [UPDATE_CUSTOMER]: (state, action) => {
        const customerPayload = action.payload;
        const { id } = customerPayload;

        // [ { id: 1, name: '', ...},
        //   { id: 2, name: '', ...},
        //   { id: 3, name: '', ...}
        // ] 
        const customers = state;
        const initialValue = []
        // [ ]
        const newCustomers = customers.reduce((acc, customer) => {
            
            if(customer.id === id){
                return [ ...acc, customerPayload];
            }else{
                return [ ...acc, customer]
            }
        }, initialValue);

        return newCustomers;
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter( c => c.id !== action.payload)
}, []);