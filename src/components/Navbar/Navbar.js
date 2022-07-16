import './Navbar.css'
// import React from 'react'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    const text = 'hice click'

    const handleClick = () => {
        console.log(text)
    }

    return (
        <nav className="Navbar">
            <div>
                <h1>Ecommerce</h1>
            </div>
            <div>
                {/* {React.createElement(Button, { label: 'Prueba', color: 'orange'})} */}
                <Button handleClick={handleClick} color='red'>celulares</Button>
                <Button color='blue'>tablets</Button>
                <Button color='green'>notebooks</Button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar