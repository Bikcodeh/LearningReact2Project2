import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "./../helpers/setPropsAsInitial";

const propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number
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

const CustomerEdit = ({ name, dni, age }) => {
  return (
    <div>
      <h2>Edicion del cliente</h2>
      <form action="">
        <Field
          name="name"
          component={MyField}
          type="text"
          label="Nombre"
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
        ></Field>
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
