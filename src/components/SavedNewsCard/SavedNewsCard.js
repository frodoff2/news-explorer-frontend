import React from 'react';
import './SavedNewsCard.css'
import savedimg from '../../images/savedimg.png';
import savedimgsec from '../../images/savedimgsec.png';
import savedimgthird from '../../images/savedimgthird.png';

function SavedNewsCard() {
  return (
    <section className='saved-news-elements'>
      <div className='cards'> 
        <p className='cards__theme'>Природа</p>   
        <img className='cards__pic' alt='pic' src={savedimgsec}/> 
        <button className="cards__save-but cards__save"> <div className='cards__trash'> </div> </button>
        <div className='cards__block'>
          <p className='cards__date'>2 августа, 2019</p>
          <h3 className='cards__title'>Национальное достояние
           – парки</h3>
          <p className='cards__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
          <p className='cards__source'>Лента.ру</p>
         </div>
      </div>

      <div className='cards'>    
        <p className='cards__theme'>Природа</p>   
        <img className='cards__pic' alt='pic' src={savedimg}/> 
        <button className='сards__del-saved'>Убрать из сохраненных</button>
        <button className='cards__save-but cards__save'>  <div className='cards__trash_active'> </div> </button>
        <div className='cards__block'>
          <p className='cards__date'>2 августа, 2019</p>
          <h3 className='cards__title'>Лесные огоньки: история одной фотографии</h3>
          <p className='cards__text'>Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного 
                                   из местных чудес природы.</p>
          <p className='cards__source'>Медуза</p>
        </div>
      </div> 

      <div className='cards'>  
        <p className='cards__theme'>Тайга</p>   
        <img className='cards__pic' alt='pic' src={savedimgthird}/> 
        <button className="cards__save-but cards__save"> <div className='cards__trash'> </div> </button>
        <div className='cards__block'>
          <p className='cards__date'>2 августа, 2019</p>
          <h3 className='cards__title'>Национальное достояние – парки</h3>
          <p className='cards__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
          <p className='cards__source'>Риа</p>
        </div>
      </div> 

      <div className='cards'> 
        <p className='cards__theme'>Парки</p>      
        <img className='cards__pic' alt='pic' src={savedimg}/> 
        <button className="cards__save-but cards__save"> <div className='cards__trash'> </div> </button>
        <div className='cards__block'>
          <p className='cards__date'>2 августа, 2019</p>
          <h3 className='cards__title'>Лесные огоньки: история одной фотографии</h3>
          <p className='cards__text'>Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного 
                                   из местных чудес природы.</p>
          <p className='cards__source'>Медуза</p>
        </div>
      </div> 

      <div className='cards'>    
      <p className='cards__theme'>Фотография</p>   
      <img className='cards__pic' alt='pic' src={savedimgsec}/> 
      <button className="cards__save-but cards__save"> <div className='cards__trash'> </div> </button>
      <div className='cards__block'>
        <p className='cards__date'>2 августа, 2019</p>
        <h3 className='cards__title'>Национальное достояние
         – парки</h3>
        <p className='cards__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
        <p className='cards__source'>Лента.ру</p>
      </div>
      </div>

    </section> 
  );
}

export default SavedNewsCard;