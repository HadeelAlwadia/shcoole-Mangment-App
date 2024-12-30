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
        <h1 className='name-app'>EduTrack Shcoole </h1>
   </section>

      </section>

        <ul className='main-links'>
          <li>
            <svg width={'20px'}  height={'20px'}
            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
          <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
        </svg>


          dashboard 
           </li>
          <li><a href='/'>teathers</a></li>
          <li><a href='/'>billing</a></li>
          <li><a href='/'>exams</a></li>
          <li><a href='/'>sitting&&profile</a></li>
        </ul>
    </header>
  )
}

export default Header
