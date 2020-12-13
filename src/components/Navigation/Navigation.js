import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navigation.css';
import quit from '../../images/quit.svg';
import quitWhite from '../../images/quit-white.svg';
import CurrentUserContext from '../../contexts/CurrentUserContext';
function Navigation(props) {
  const { isMenuOpen, onPopup, handleExit } = props;
  const name = React.useContext(CurrentUserContext);
  const location = useLocation();
  const isSavedPage = (location.pathname === '/saved-news');
  function handleClick() {
    if (name) {
      handleExit();
    } else {
      onPopup();
    }
  }
  const savedLink = (
    <a className={(isSavedPage) ? `${isMenuOpen ? 'header-saved__black nav__saved' : 'header-saved__saved header-saved__changed' }` : 'nav__saved' } href='saved-news'> Сохраненные </a>

  );
  const authButton = (
    <button className='nav__auth' onClick={handleClick}>Авторизоваться</button>
  );
  const exitButton = (
    <button onClick={handleClick} className={`nav__auth header-saved__changed ${(isSavedPage && !isMenuOpen) ? 'header-saved__name' : '' }  ${isMenuOpen ? 'header-saved__black header-saved__auth-black' : '' }`}>
      {name} 
      <img className='header-saved__img' src={(isMenuOpen || !isSavedPage) ? quitWhite : quit} alt='quit'/> 
    </button>
  );
  return (
    <section className={`nav ${isMenuOpen ? 'nav_opened' : '' }`}>
      <div className='nav__block'> 
      <a className={(isSavedPage) ? `${isMenuOpen ? 'header-saved__first' : 'header-saved__main' }` : 'nav__main' } href='/' >Главная </a>
      {(name) ? savedLink : null}
      {(name) ? exitButton : authButton}
      </div>
   </section> 
  );
}

export default Navigation;