import { createSelector } from "reselect";

export const getCustomerByDni = createSelector((state, props) => state.customers.find(c => c.dni === props.dni), customer => customer);

export const getCustomers = state => state.customers;

