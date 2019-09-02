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
                    body={<p>Datos del cliente</p>}>
                </AppFrame>
            </div>
        )
    }
}
CustomerCotainer.propTypes = { 
    dni: PropTypes.string.isRequired,

}

export default connect(null, null)(CustomerCotainer);