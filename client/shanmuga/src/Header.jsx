import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
const Header = () => {
  return (
    <div>
        <Link to='/'>Hiii</Link>
        <Navbar/>
    </div>
  )
}

export default Header