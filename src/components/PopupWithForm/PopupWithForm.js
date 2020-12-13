import React from 'react'; 
import './PopupWithForm.css';
import useFormWithValidation from '../../utills/useFormWithValidation';
function PopupWithForm(props) {
  const { 
    isOpen, 
    onClose, 
    handleRegistration, 
    handleLogin, 
    handleChangeForm, 
    regPage, 
    loading, 
    error 
  } = props;
  const validation = useFormWithValidation();
  const title = (regPage) ? 'Регистрация' : 'Вход';
  const button = (regPage) ? 'Зарегистрироваться' : 'Войти';
  const text = (regPage) ? 'Войти' : 'Зарегистрироваться';
  function changeForm() {
    validation.resetForm();
    handleChangeForm();
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const data = validation.values;
    if (regPage) {
      handleRegistration(data, validation.resetForm);
    } else {
      handleLogin(data, validation.resetForm);
    }
  }
  function handleClose() {
    validation.resetForm();
    onClose()
  }
  const inputName = (
    <>
      <p className='popup__label'>Имя</p> 
      <input onChange={validation.handleChange} value={validation.values.name || ''} type='text' className='popup__input' name='name' placeholder='Введите имя' minLength='2' maxLength='30' pattern='[A-Za-zА-Яа-яЁё -]{2,30}' required />  
      <span className='popup__input_error' id='popup__info-error'>{validation.errors.name}</span>   
    </>
  );
  return( 
    <section className={`popup ${isOpen ? 'popup_opened' : ''}` } >
      <form onSubmit={handleSubmit} className={`popup__container ${regPage ? 'popup__container_big' : ''}` }> 
        <button className={'popup__close'} onClick={handleClose} type='button'></button>   
        <h2 className='popup__title'>{title}</h2> 
        <p className='popup__label'>Email</p>
        <input onChange={validation.handleChange} value={validation.values.email || ''} type='email' className='popup__input' name='email' minLength='2' maxLength='40' required placeholder='Введите почту' />   
        <span className='popup__input_error' id='popup__name-error'>{validation.errors.email}</span>  
        <p className='popup__label'>Пароль</p>
        <input onChange={validation.handleChange} value={validation.values.password || ''} type='password' className='popup__input' name='password' placeholder='Введите пароль' minLength='6' maxLength='30' required />  
        <span className='popup__input_error' id='popup__info-error'>{validation.errors.password}</span>
        {(regPage) ? inputName : null}
        {(error) ? <span className='popup__input_error' id='popup__info-error'>{error}</span> : null}
        <button className={`popup__button popup__button_active  ${(loading) ? 'popup__but-active' : ''}`} type='submit' disabled={loading}>{button}</button>   
        <p className='popup__or'>или<button onClick={changeForm} className='popup__register'>{text}</button></p>
      </form>
    </section>   
  ) 
} 
   
export default PopupWithForm; 
 
     
 