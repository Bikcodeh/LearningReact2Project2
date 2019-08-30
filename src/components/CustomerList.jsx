import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from './CustomerListItem';

const propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
}
//Este componente es el que muestra todos los usuarioss
const CustomerList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map(c => 
                        <CustomerListItem 
                            key={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}>
                        </CustomerListItem>)
                }
            </div>
        </div>
    )
}

CustomerList.propTypes = propTypes

export default CustomerList
