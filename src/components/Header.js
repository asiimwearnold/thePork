import React from 'react';
import './styles/header.css';
import logo from '../images/logo.png';
import {Link } from "react-router-dom";
import { Example } from './animation/Example';
import FindPorkJoint from './FindPorkJoint';
  
function Header() {
    return (
        <div className='header'>
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
                
            </div>
            
        </div>
    )
}

export default Header
