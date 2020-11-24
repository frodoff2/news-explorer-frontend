import React from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';

function Header(props) {
  return (
    <header className="header">
      <div className="header__block"> 
        <p className="header__logo"> NewsExplorer </p>
        <div className={`header__menu ${props.isMenuOpen ? 'header__menu_close' : '' }`} onClick={props.onMenu} > </div>
        <Navigation onSingIn={props.onSingIn} isMenuOpen={props.isMenuOpen} onMenuClose={props.onMenuClose}/>     
      </div>
      <Main />
    </header>

  );
}

export default Header;