import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import AppFrame from './../AppFrame';
import CustomerActions from './../CustomerActions';

//history es como un stack, una especie de pila que va guardando entre elementos, las rutas
const propTypes = {
    
}

class HomeContainer extends React.Component {

    handleOnClick = () => {
        this.props.history.push('/customers')
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

export default withRouter(HomeContainer)
// es bueno usarlo con el withRouter ya que nos estamos asegurando de que el componente siempre quede inyectado
// con las propiedades (history, locations, match)