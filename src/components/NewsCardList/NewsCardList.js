import React from 'react';
import './NewsCardList.css'
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
  return (
    <section class='news'>
      <p className='news__results'>Результаты поиска</p>
      <NewsCard />
      <button className='news__button'>Показать еще</button>
    </section>
  );
}

export default NewsCardList;