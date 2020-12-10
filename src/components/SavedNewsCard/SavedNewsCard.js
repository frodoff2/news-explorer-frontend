import React from 'react';
import './SavedNewsCard.css';
import NewsCard from '../NewsCard/NewsCard';
function SavedNewsCard(props) {
  const { cards, handleDeleteCard } = props;

  return (
    <section className='saved-news__elements'> 

      {cards && cards.map((card, i) => (

        <NewsCard key={i} article={card} handleDeleteCard={handleDeleteCard} />
      ))}
   </section> 
  );
}

export default SavedNewsCard;