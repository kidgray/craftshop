import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/rose.svg';

export const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo alt='HOME' className='logo'/>
            </Link>

            <div className='header-options'>
                <Link to='/shop' className='option'> SHOP </Link>
                <Link to='/contact' className='option'> CONTACT </Link>
                <Link to='/signin' className='option'> SIGN IN </Link>
            </div>
        </div>
    )
}