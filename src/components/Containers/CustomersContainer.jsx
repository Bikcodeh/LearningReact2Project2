import React from "react";
import PropTypes from "prop-types";
import AppFrame from "../AppFrame";
import CustomersList from "../CustomersList";
import CustomerActions from "../CustomerActions";
import { withRouter } from "react-router-dom";

const propTypes = {};

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

class CustomersContainer extends React.Component {
  handleAddNew = () => {
      this.props.history.push('/customers/new')
  };
  renderBody = customers => (
    <div>
      <CustomersList
        customers={customers}
        urlPath={"customers/"}
      ></CustomersList>
      <CustomerActions>
        <button onClick={this.handleAddNew}>Nuevo cliente</button>
      </CustomerActions>
    </div>
  );

  render() {
    return (
      <div>
        <AppFrame
          header={"Listado de clientes"}
          body={this.renderBody(customers)}
        ></AppFrame>
      </div>
    );
  }
}

CustomersContainer.propTypes = propTypes;

export default withRouter(CustomersContainer);
