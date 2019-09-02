import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import AppFrame from './../AppFrame';

class CustomerCotainer extends React.Component {

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`} 
                    body={<p>Datos del cliente: "{this.props.customer.name}"</p>}>
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
    customer: state.customers.find(c => c.dni === props.dni)
})

export default connect(mapStateToProps, null)(CustomerCotainer);