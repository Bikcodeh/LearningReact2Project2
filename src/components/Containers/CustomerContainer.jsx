import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import AppFrame from './../AppFrame';
import { getCustomerByDni } from './../../selectors/customers';
import { Route } from 'react-router-dom';

class CustomerCotainer extends React.Component {
    
    renderBody = () => {
        
        return <Route path='/costumers/:dni/edit' children={ 
            (props) => (props.location.pathname.includes('edit') ? <p>Esto es la edicion</p> : <p>No es edicion</p>)
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
    customer: PropTypes.object.isRequired,

}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})

export default connect(mapStateToProps, null)(CustomerCotainer);