import React from 'react'

const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`alert`}></div>
        )
    )
}

export default Alert
