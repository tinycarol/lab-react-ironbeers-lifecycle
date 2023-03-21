import React from 'react'
import "./index.css"
import homeIcon from "../../assets/images/home.png"
import { Link } from 'react-router-dom'


export const Nav = () => {
  return (
    <div className='nav'>
      <nav > <Link  to='/' ><img src={homeIcon} alt="img"/></Link> </nav>
    </div>
  )
}
