import React from 'react';
import './Main.css';

function Main() {
  return (
    <section className="main">
        <h1 className="main__title"> Что творится
         в мире? </h1>
        <p className="main__par"> Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <div className="main__search"> 
          <input placeholder="Введите тему новости" className="main__input" /> 
          <button className="main__button"> Искать</button> 
        </div> 
    </section>
  );
}

export default Main;