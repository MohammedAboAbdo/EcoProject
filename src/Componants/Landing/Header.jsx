import logo from '../../assets/landingPage/MegaMart.svg'
import user from '../../assets/landingPage/user.svg'
import search from '../../assets/landingPage/Search.svg'
import buy from '../../assets/landingPage/Buy.svg'
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (

        <header>
            <div className='logo'>
                <img src={logo} alt="MegaMart" />
            </div>
            <div className='search-par'>
                <div className='search-box'>
                    <img src={search} alt="" />
                    <input type="search" aria-label="Search products" placeholder="Search" />
                </div>
                <div className='account-links'>
                    <img src={user} alt="" />
                    <Link to="/Login">login</Link>
                    <span>/</span>
                    <Link to="/SignUp">signUp</Link>
                </div>
                <div className='cart-link'>
                    <img src={buy} alt="" />
                    <Link to="/Login">Cart</Link>
                </div>
            </div>

        </header>
    )
}

export default Header