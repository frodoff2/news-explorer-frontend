import React from 'react';
import './SavedNews.css';
import SavedNewsCard from '../SavedNewsCard/SavedNewsCard'

function SavedNews() {
  return (
    <section className='saved-news'>
      <p className='saved-news__name'> Сохранённые статьи </p>
      <p className='saved-news__title'> Грета, у вас 5 сохранённых статей </p>
      <p className='saved-news__parag'> По ключевым словам: <b> Природа, Тайга </b> и <b> 2-м другим </b> </p>
      <SavedNewsCard />
    </section>

  );
}

export default SavedNews;