import React from 'react'
import './header.css'
import logo from '../../assets/edutrack.png'
const Header = () => {
  return (
    <header>
      <section className='logo-container'>
     <section>
      <a href='/'>
        <img src={logo} alt='eductrack logo' className='logo-app'/></a>
        <h1 className='name-app'>EduTrack Shcoole</h1>
   </section>

      </section>

        <ul className='main-links'>
          <li ><a href='/'>dashboard</a></li>
          <li><a href='/'>teathers</a></li>
          <li><a href='/'>billing</a></li>
          <li><a href='/'>exams</a></li>
          <li><a href='/'>sitting&&profile</a></li>

        </ul>
    </header>
  )
}

export default Header
