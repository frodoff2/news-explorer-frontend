import React from 'react';
import './NewsCardList.css'
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  const { articles, amount, handleAmount, handleAddCard, handleDeleteCard } = props;

  return (
    <section className='news'>
      <p className='news__results'>Результаты поиска</p>
      <section className='elements'>
        {articles && articles.map((article, i) => (
          (i<amount) ? <NewsCard key={i} article={article} handleAddCard={handleAddCard} handleDeleteCard={handleDeleteCard} /> : null
        ))}
      </section>
      { (amount<articles.length) ? <button onClick={handleAmount} className='news__button' type='button'>Показать еще</button>: null }
      
    </section>
  );
}

export default NewsCardList;