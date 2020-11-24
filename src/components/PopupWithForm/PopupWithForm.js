import React from 'react'; 
import './PopupWithForm.css';

function PopupWithForm(props) { 
  return( 
    <> 
       <section className={`popup ${props.isOpen ? ('popup_opened') : ('')} ` } >
         <form className='popup__container'> 
          <button className={'popup__close'} onClick={props.onClose} type="reset"></button>   
          <h2 className="popup__title">Вход</h2> 
          <p className="popup__label">Email</p>
          <input type="text" className="popup__input" name="name" id="popup__name" minLength="2" maxLength="40" required pattern="[A-Za-zА-ЯЁа-яё -]{1,}" placeholder="Введите почту" />   
          <span className="popup__input-error" id="popup__name-error"></span>  
          <p className="popup__label">Пароль</p>
          <input type="text" className="popup__input" name="about" placeholder='Введите пароль' id="popup__info" minLength="2" maxLength="200" required />  
          <span className="popup__input-error" id="popup__info-error"></span>     
          <button className="popup__button popup__button_active " type="submit" id="button-info">Войти</button>   
          <p className='popup__or'>или<button className='popup__register'>Зарегистрироваться</button></p>
        </form>   
      </section>   
    </> 
  ) 
} 
   
export default PopupWithForm; 
 
     
 