import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "./../helpers/setPropsAsInitial";
import CustomerActions from './CustomerActions';

const propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
};

//const isRequired = value => !value && "Este campo es requerido";

const validate = values => {
    const error = {};

    if(!values.name){
        error.name = "El campo nombre es requerido..."
    }

    if(!values.dni){
        error.dni = "El dni es requerido..."
    }

    return error;
}
const isNumber = value => isNaN(Number(value)) && "El campo debe ser un numero";

const MyField = ({ input, meta, type, label }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <input {...input} type={!type ? "text" : type} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

const toNumber = value => value && Number(value);

const toUpper = value => value && value.toUpperCase();

const toLower = value => value && value.toLowerCase();

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
  return (
    <div>
      <h2>Edicion del cliente</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={MyField}
          type="text"
          label="Nombre"
          parse={toUpper}
          format={toLower}
        ></Field>

        <Field
          name="dni"
          component={MyField}
          type="text"
          validate={[isNumber]}
          label="Dni"
        ></Field>

        <Field
          name="age"
          component={MyField}
          type="number"
          validate={isNumber}
          label="Edad"
          parse={toNumber}
        ></Field>

        <CustomerActions>
          <button type="submit" disabled={submitting}>Aceptar</button>
          <button onClick={onBack}>Cancelar</button>
        </CustomerActions>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = propTypes;

const CustomerEditForm = reduxForm(
    { 
        form: "CustomerEdit",
        validate 
    })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
