
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <button to='/'>
                ECOMMERCE
            </button>
            <div className="Categories">
                <button className="Option">Celulares</button>
                <button className="Option">Tablets</button>
                <button className="Option">Notebooks</button>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar