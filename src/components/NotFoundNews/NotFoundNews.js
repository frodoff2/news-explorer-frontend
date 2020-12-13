import React from 'react';
import './NotFoundNews.css';
import nopic from '../../images/notfound.svg';

function NotFoundNews() {
  return (

   <section className='noresults'>
     <img className='noresults__image' alt='noresults' src={nopic} />
     <p className='noresults__title'>Ничего не найдено</p>
     <p className='noresults__text'>К сожалению по вашему запросу ничего не найдено.</p>
   </section>
  );
}

export default NotFoundNews;