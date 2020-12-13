import React from 'react';
import './NewsCard.css';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function NewsCard(props) {
  const { handleAddCard, handleDeleteCard, article } = props;
  const { keyword, title, text, date, source, link, image, _id} = article;
  const name = React.useContext(CurrentUserContext);

  const location = useLocation();
  const isSavedPage = (location.pathname==='/saved-news');

  const data = (str) => {
    const parse = new Date(str);
    return `${parse.toLocaleString('ru', { month: 'long', day: 'numeric' })}, ${parse.getFullYear()}`;
  };

  function handleClick() {
    if (name) {
      if (_id) {
        handleDeleteCard(article);
      } else {
        handleAddCard(article);
      }
    }
  }
  const iconSaved = (
    <div className='cards__icon'></div> 
  );
  const iconDelete = (
    <div className='cards__trash'> </div>
  );

  const iconPressed = (
    <div className='cards__icon_pressed'> </div>
  );

  return (
    <div className='cards'>
      {(isSavedPage) ? <p className='cards__theme'>{keyword}</p> : null}    
      <img className='cards__image' alt={keyword} src={image}/> 
      <button onClick={handleClick} className='cards__save-but'> 
        {(isSavedPage) ? iconDelete: (_id) ? iconPressed : iconSaved} 
      </button>
      <div className='cards__block'>
        <p className='cards__date'>{data(date)}</p>
        <h3 className='cards__title'>{title}</h3>
        <p className='cards__text'>{text}</p>
        <a href={link} className='cards__source' target='_blank' rel='noreferrer'>{source}</a>
      </div>
    </div>

    
  );
}

export default NewsCard;