import React from 'react';
import './SavedNewsHeader.css';
import quit from '../../images/quit.svg';

function SavedNewsHeader(props) {
  return (
    <header className="header-saved">
      <div className="header__block header-saved__block"> 
        <div className={`header__menu_black ${props.isMenuOpen ? 'header__menu_close' : '' }`} onClick={props.onMenu} > </div>
        <p className={`header-saved__changed header__logo ${props.isMenuOpen ? 'header-saved__black' : '' }`}> NewsExplorer </p>

        <div className={`nav ${props.isMenuOpen ? 'nav_opened' : '' }`}>
          <div className='nav__block'> 
            <a className={`${props.isMenuOpen ? 'header-saved__first' : 'header-saved__main ' }`} href='/' > Главная </a>
            <a className={`nav__saved header-saved__changed header-saved__saved ${props.isMenuOpen ? 'header-saved__black' : '' }`} href='#'> Сохраненные статьи </a>
            <a className={`nav__auth header-saved__changed header-saved__name ${props.isMenuOpen ? 'header-saved__black header-saved__auth-black' : '' }`} href='#' > Грета 
              <img className='header-saved__img' src={quit} alt='quit'/> 
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}

export default SavedNewsHeader;