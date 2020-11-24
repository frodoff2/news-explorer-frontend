import React from 'react';
import './Footer.css';
import fb from '../../images/fb.png';
import git from '../../images/git.png';

function Footer() {
  return (
    <section className='footer'>
     <div className="footer__list">
       <li className="footer__author"> © 2020 Supersite, Powered by News API </li>
       <button className="footer__main">  Главная </button>
       <button className="footer__yandex"> Яндекс.Практикум </button>
       <button className="footer__icon-fb"> <img src={git} alt='facebook-icon'/> </button> 
       <button className="footer__icon"> <img src={fb} alt='git-icon' /> </button>
     </div>
    </section>
  );
}

export default Footer;