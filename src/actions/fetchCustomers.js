import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

const url = 'http://localhost:3001/customers'

const apiFetchCustomers = () => fetch(url).then(r => r.json());

//cuando el middleware redux promise detecta que como payload estamos pasando una promise
//entonces ejecuta la promise y una vez que obtiene el resultado genera una accion que ahi si se termina de resolver
//y la toma el reducer
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiFetchCustomers);
