import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import AppFrame from './../AppFrame';
import { getCustomerByDni } from './../../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from './../CustomerEdit';
import CustomerData from './../CustomerData';

class CustomerCotainer extends React.Component {
    
    handleSubmit = values => {
        
        console.log(JSON.stringify(values))   
    }
    renderBody = () => {
        
        return <Route path='/costumers/:dni/edit' children={ 
            (props) => {

                const CustomerControl = props.location.pathname.includes('edit') ? CustomerEdit : CustomerData;
                //return <CustomerControl initialValues={this.props.customer} />
                return <CustomerControl {...this.props.customer} onSubmit={this.handleSubmit}/>
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
    //customer: PropTypes.object.isRequired,

}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})

export default connect(mapStateToProps, null)(CustomerCotainer);