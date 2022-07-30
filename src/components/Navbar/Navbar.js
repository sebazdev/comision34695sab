
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Link to='/'>
                ECOMMERCE
            </Link>
            <div className="Categories">
                <Link to='/category/celular' className="Option">Celulares</Link>
                <Link to='/category/tablet' className="Option">Tablets</Link>
                <Link to='/category/notebook' className="Option">Notebooks</Link>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default Navbar