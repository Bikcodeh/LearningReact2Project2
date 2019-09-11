import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "./../helpers/setPropsAsInitial";
import CustomerActions from "./CustomerActions";

const propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired
};

//const isRequired = value => !value && "Este campo es requerido";

const validate = values => {
  const error = {};

  if (!values.name) {
    error.name = "El campo nombre es requerido...";
  }

  if (!values.dni) {
    error.dni = "El dni es requerido...";
  }

  return error;
};
const isNumber = value => isNaN(Number(value)) && "El campo debe ser un numero";


const toNumber = value => value && Number(value);

const toUpper = value => value && value.toUpperCase();

const toLower = value => value && value.toLowerCase();
//La funciona normalize se ejecuta despues de la funcion parse
/* const onlyGrow = (value, previousValue, values) => 
value && previousValue && (value > previousValue ? value: previousValue) */

class CustomerEdit extends Component {

  /* componentDidMount(){
    if(this.txt){
      this.txt.focus();
    }
  } */

  renderField = ({ input, meta, type, label, withFocus }) => (
    <div>
      <label htmlFor={label}>{label}</label>
      <input {...input} type={!type ? "text" : type}  /*ref={withFocus && (txt => this.txt = txt)} *//>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );

  render() {
    const { handleSubmit, submitting, onBack, pristine } = this.props;
    return (
      <div>
        <h2>Edicion del cliente</h2>
        <form onSubmit={handleSubmit}>
          <Field
            withFocus
            name="name"
            component={this.renderField}
            type="text"
            label="Nombre"
            parse={toUpper}
            format={toLower}
          ></Field>

          <Field
            name="dni"
            component={this.renderField}
            type="text"
            validate={[isNumber]}
            label="Dni"
          ></Field>

          <Field
            name="age"
            component={this.renderField}
            type="number"
            validate={isNumber}
            label="Edad"
            parse={toNumber}
            //normalize={onlyGrow}
          ></Field>

          <CustomerActions>
            <button type="submit" disabled={pristine || submitting}>
              Aceptar
            </button>
            <button onClick={onBack} disabled={submitting}>
              Cancelar
            </button>
          </CustomerActions>
        </form>
      </div>
    );
  }
}

CustomerEdit.propTypes = propTypes;

const CustomerEditForm = reduxForm({
  form: "CustomerEdit",
  validate
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
