import React from 'react'
import './styles/signinbutton.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function SignInButton() {
  return (
    <Link className='signInButton' to='/account/signin'>
      Sign in
    </Link>
  )
}

export default SignInButton
