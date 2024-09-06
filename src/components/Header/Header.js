import React from 'react';
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" width={'120px'} />
            <ul className='navList'>
                <li className="items">Home</li>
                <li className="items">About</li>
                <li className="items">Contact</li>
            </ul>
            <div className='button'>
                <button>Sign In</button>
            </div>
        </nav>
    );
};

export default Header;