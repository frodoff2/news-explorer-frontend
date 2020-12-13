import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
   <section className='preloader'>
       <div className='circle-preloader'></div>
       <p className='preloader__search'>Идет поиск новостей...</p>
   </section>
  );
}

export default Preloader;