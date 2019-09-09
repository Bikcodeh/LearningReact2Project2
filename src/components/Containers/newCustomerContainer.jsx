import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../AppFrame';
import CustomerEdit from '../CustomerEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { insertCustomer } from './../../actions/insertCustomer';
import { SubmissionError } from 'redux-form';

class NewCustomerContainer extends Component {

    handleSubmit = values => {
        return this.props.insertCustomer(values).catch( r => {
            if(r.error){
                throw new SubmissionError(r.validation);
            }
        });;
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
                            onSubmitSuccess={this.handleOnSubmitSuccess}
                            onBack={this.handleOnBack}></CustomerEdit>
    }
    render() {
        return (
            <div>
                <AppFrame header={'Edicion del cliente'}
                body={this.renderBody()}></AppFrame>
            </div>
        )
    }
}
NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,

}

export default withRouter(connect(null, { insertCustomer})(NewCustomerContainer));