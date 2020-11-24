import React from 'react';
import './NewsCard.css'
import first from '../../images/first.png';
import second from '../../images/second.png';
import third from '../../images/third.png';

function NewsCard() {
  return (
    <section className='elements'>
      <div className='cards'>    
        <img className='cards__image' alt='pic' src={first}/> 
        <button className="cards__save-but"> <div className='cards__icon'> </div> </button>
        <div className='cards__block'>
          <p className='cards__date'>2 августа, 2019</p>
          <h3 className='cards__title'>Национальное достояние
           – парки</h3>
          <p className='cards__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
          <p className='cards__source'>Лента.ру</p>
        </div>
      </div>   

      <div className='cards'>    
        <img className='cards__image' alt='pic' src={second}/> 
        <button className="cards__save-but"> <div className='cards__icon'> </div> </button>
        <div className='cards__block'>
          <p className='cards__date'>2 августа, 2019</p>
          <h3 className='cards__title'>Лесные огоньки: история одной фотографии</h3>
          <p className='cards__text'>Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного 
                                   из местных чудес природы.</p>
          <p className='cards__source'>Медуза</p>
        </div>
      </div> 

      <div className='cards'>    
        <img className='cards__image' alt='pic' src={third}/> 
        <button className="cards__save-but"> <div className='cards__icon'> </div> </button>
        <div className='cards__block'>
          <p className='cards__date'>2 августа, 2019</p>
          <h3 className='cards__title'>Национальное достояние – парки</h3>
          <p className='cards__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
          <p className='cards__source'>Риа</p>
        </div>
      </div> 
</section>

    
  );
}

export default NewsCard;