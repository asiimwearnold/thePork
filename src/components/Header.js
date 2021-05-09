import React from 'react';
import {useSelector} from "react-redux";
import './styles/header.css';
import logo from '../images/logo.png';
import {Link } from "react-router-dom";
import { Example } from './animation/Example';
import FindPorkJoint from './FindPorkJoint';
import {selectUser} from '../features/userSlice';
import SignInButton from './SignInButton';
import LogoutButton from './LogoutButton';
import SignUpButton from './SignUpButton';
  
function Header(menuPage) {
    const user = useSelector(selectUser)

    return (
        <div className={`header ${menuPage && 'header_menuPage'}`}>
            <div className="header_left">
                <Link className="header_logo" to='/'>
                 <img src={logo} alt="Logo"/> 
                </Link>
                <Link className='header_link' to = '/menu'>
                    menu
                </Link>
                <Link className='header_link' to = '/Rewords'>
                    Rewords
                </Link>
                <Link className='header_link' to = '/Giftcards'>
                    Gift Cards
                </Link>
                <Link className='header_link' to = '/Price'>
                   Pricing 
                </Link>
            </div>
            
            <div className="header_right">
                <Example/>
                <FindPorkJoint/>
                {!user ?(
                    <>
                    <Link to='/account/signin'>
                        <SignInButton/>
                    </Link>

                    <Link to='/account/create'>
                    <SignUpButton/>
                    </Link>
                    </>
                     ):(
                        <div className="header_logout">
                            {menuPage ? <LogoutButton/>: <Link to='/menu'>Order Now</Link>}
                        </div>
                     )}
                
            </div>
            
        </div>
    )
}

export default Header
