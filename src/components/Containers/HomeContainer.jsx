import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import AppFrame from './../AppFrame';
import CustomerActions from './../CustomerActions';

const propTypes = {
    
}

class HomeContainer extends React.Component {

    handleOnClick =() => {
        //<Link to="/customers">Listado de clientes</Link>
    }
    render(){
        return (
            <div>
                <AppFrame 
                    header='home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>
                                    Listado de clientes
                                </button>
                            </CustomerActions>
                        </div>
                    }>
                </AppFrame>
            </div>
        )
    }
}

HomeContainer.propTypes = propTypes

export default HomeContainer
