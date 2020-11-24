import React from 'react';
import './Navigation.css'

function Navigation(props) {
  return (

    <section className={`nav ${props.isMenuOpen ? 'nav_opened' : '' }`}>
      <div className='nav__block'> 
       <a className="nav__main" href='/' > Главная </a>
       <a className="nav__saved" href='saved-news'> Сохраненные статьи </a>
       <a className="nav__auth" onClick={props.onSingIn}> Авторизоваться </a>
      </div>
   </section>
  );
}

export default Navigation;