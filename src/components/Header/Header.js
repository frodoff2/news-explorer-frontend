import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css'
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';

function Header(props) {
  const { isMenuOpen, onMenu, onPopup, onMenuClose, handleSearch, handleExit } = props;
  const location = useLocation();
  const isSavedPage = (location.pathname==='/saved-news');
  return (
    <header className={(isSavedPage) ? 'header-saved' : 'header'}>
      <div className={`header__block ${(isSavedPage) ? 'header-saved__container' : null}`}> 
        <p className={`header__logo ${(isSavedPage && !isMenuOpen) ? `header-saved__changed ${isMenuOpen ? `header-saved__black` : '' }` : null}`}>NewsExplorer</p>
        <div className={(isSavedPage && !isMenuOpen) ? `header__menu_black` : `header__menu ${isMenuOpen ? `header__menu_close` : '' }`} onClick={onMenu} > </div>
        <Navigation onPopup={onPopup} isMenuOpen={isMenuOpen} onMenuClose={onMenuClose} handleExit={handleExit} />     
      </div>
      {(isSavedPage) ? null : <Main handleSearch={handleSearch} />}
    </header>

  );
}

export default Header;