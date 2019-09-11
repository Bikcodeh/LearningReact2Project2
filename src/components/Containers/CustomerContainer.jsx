import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import AppFrame from './../AppFrame';
import { getCustomerByDni } from './../../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from './../CustomerEdit';
import CustomerData from './../CustomerData';
import { withRouter } from 'react-router-dom';
import { fetchCustomers } from './../../actions/fetchCustomers';
import { updateCustomer } from './../../actions/updateCustomer';
import { SubmissionError } from 'redux-form';
import { deleteCustomer } from './../../actions/deleteCustomer';

class CustomerCotainer extends React.Component {
    
    componentDidMount(){
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        const { id } = values;
        //retornamos la promesa, ya que mientras se ejecuta la promesa, 
        //el submiting estara en true, cuando ya se resulva pasara a false
        return this.props.updateCustomer(id, values).catch( r => {
            if(r.error){
                throw new SubmissionError(r.validation);
            }
        });
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnDelete = id => {
        
        this.props.deleteCustomer(id).then(v => {
            this.props.history.goBack();
        });
    }

    handleOnBack =() =>{
        this.props.history.goBack();
    }

    renderCustomerControl = (isEdit, isDelete) => {
        
        if(this.props.customer){
            const CustomerControl = isEdit ? CustomerEdit : CustomerData;
            //return <CustomerControl initialValues={this.props.customer} />
            return <CustomerControl {...this.props.customer} 
                        onSubmit={this.handleSubmit} 
                        onBack={this.handleOnBack}
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                        isDeleteAllow={!!isDelete}
                        onDelete={this.handleOnDelete} />
        }
        return null;
    }

    renderBody = () => {
        
        return <Route path='/customers/:dni/edit' children={ 
        ( { match: isEdit } ) => { 
                return <Route path="/customers/:dni/del" children={
                    ( { match: isDelete} ) => {
                        return this.renderCustomerControl(isEdit, isDelete)
                    }
                } />
            }
        } />
    }
    //<p>Datos del cliente: "{this.props.customer.name}"</p>
    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`} 
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        )
    }
}
CustomerCotainer.propTypes = { 
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,

}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
})(CustomerCotainer));