import React from 'react';
import './Main.css';

function Main(props) {
  const [input, setInput] = React.useState('');

  function handleInput(evt) {
    setInput(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (input.length) {
      props.handleSearch(input);
    }
  }  
  return (
    <section className='main'>
        <h1 className='main__title'>Что творится в мире?</h1>
        <p className='main__par'> Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <form onSubmit={handleSubmit} className='main__search' method='post' action='#'>
          <input onChange={handleInput} placeholder='Введите тему новости' minLength='1' className='main__input' value={input || ''} required/> 
          <button className='main__button' type='submit'>Искать</button>
        </form>
    </section>
  );
}

export default Main;