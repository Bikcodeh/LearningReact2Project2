import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

const customers = [
  {
    dni: "27000",
    name: "Juan Pereza",
    age: 37
  },
  {
    dni: "30000",
    name: "Otro",
    age: 23
  },
  {
    dni: "33000",
    name: "Victor Hoyos",
    age: 21
  }
];
export const fetchCustomers = createAction(FETCH_CUSTOMERS);
