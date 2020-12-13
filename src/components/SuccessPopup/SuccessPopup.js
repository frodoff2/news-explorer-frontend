import React from 'react';
import './SuccessPopup.css';

function SuccessPopup(props) {
  const { isOpen, onClose, handleOpen } = props;
  return (
    <section className={`popup ${isOpen ? ('popup_opened') : ('')} ` } >
      <form className='success-popup__container'>
      <button className='success-popup__close' onClick={onClose} type='button'></button>   
        <p className='popup__title'>Пользователь успешно зарегистрирован!</p>
        <button onClick={handleOpen} className='popup__register success-popup__enter' type='button'>Войти</button>

      </form>
    </section>

  );
}

export default SuccessPopup;