import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.node.isRequired,
}

const CustomerActions = ({ children}) => {
    return (
        <div>
            <div className="customer-actions">
                <div>{children}</div>
            </div>
        </div>
    )
}

CustomerActions.propTypes = propTypes

export default CustomerActions
