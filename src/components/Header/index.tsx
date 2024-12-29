import React from 'react'
import './header.css'
import logo from '../../assets/edutrack.png'
const Header = () => {
  return (
    <header>
      <section className='logo-contineer'>
   <section>
   <a href=''>
        <img src={logo} alt='eductrack logo' className='logo-app'/>
        </a>
        <h1 className='name-app'>eduTrack Shcoole</h1>
   </section>
      </section>

        <ul>
          <li><a href='/'>home</a></li>
        </ul>
    </header>
  )
}

export default Header
