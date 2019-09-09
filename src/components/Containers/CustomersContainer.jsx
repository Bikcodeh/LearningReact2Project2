import React from "react";
import PropTypes from "prop-types";
import AppFrame from "../AppFrame";
import CustomersList from "../CustomersList";
import CustomerActions from "../CustomerActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCustomers } from "../../actions/fetchCustomers";
import { getCustomers } from './../../selectors/customers';

const propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
};


class CustomersContainer extends React.Component {
  componentDidMount() {
    if(this.props.customers.length == 0){
      this.props.fetchCustomers();
    }
  }

  handleAddNew = () => {
    this.props.history.push("/customers/new");
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
          body={this.renderBody(this.props.customers)}
        ></AppFrame>
      </div>
    );
  }
}

CustomersContainer.propTypes = propTypes;

CustomersContainer.defaultProps = {
  customers: []
};

//state.customers estamos solicitando lo que esta en el reducer costumers
const mapStateToProps = state => ({
    customers: getCustomers(state)
})

export default withRouter(
  connect(
    mapStateToProps,
    { fetchCustomers }
  )(CustomersContainer)
);
