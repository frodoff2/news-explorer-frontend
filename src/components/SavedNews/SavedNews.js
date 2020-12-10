import React from 'react';
import './SavedNews.css';
import SavedNewsCard from '../SavedNewsCard/SavedNewsCard';
import CurrentUserContext from '../../contexts/CurrentUserContext';
function SavedNews(props) {
  const { cards, handleDeleteCard } = props;
  const name = React.useContext(CurrentUserContext);
  const keys = Object.entries(cards.reduce((obj, key) => {
    if (obj[key.keyword]) {
      obj[key.keyword] += 1;
    } else {
      obj[key.keyword] = 1;
    }
    return obj
  }, {})).sort((a, b) => b[1] - a[1]);
  return (
    <>
      <section className='saved-news'>
        <p className='saved-news__name'>Сохранённые статьи</p>
        <p className='saved-news__title'>{name}, у вас {cards.length} сохранённых статей</p>
        <p className='saved-news__parag'>По ключевым словам:<b> {keys.length > 3 ? `${keys[0][0]}, ${keys[1][0]} и ${keys.length - 2}-м другим` : `${keys.map((i) => i[0]).join(', ')}`}</b></p>
      </section>
      <SavedNewsCard cards={cards} handleDeleteCard={handleDeleteCard} /> 
    </>
  );
}

export default SavedNews;