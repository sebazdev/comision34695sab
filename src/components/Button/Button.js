import React from 'react'

const Button = ({ handleClick, color, children }) => {
    
    // const { handleClick, color, children } = props

    return (
        // React.createElement('button', { 
        //     onClick: props.handleClick, 
        //     style: { color: props.color}
        // }, props.label)
        <button onClick={handleClick} style={{ color: color}}>
            {children}
        </button>
    )
}

export default Button