import React from 'react';
import './About.css';
import avatar from '../../images/avatar.png'

function About() {
  return (
    <section className='about'>
      <img className='about__avatar' src={avatar} alt='author'/>
      <div className='about__block'> 
      <h2 className='about__title'>Об авторе</h2>
      <p className='about__text'>Меня зовут Мухаббат. Я из Казахстана, город - Алматы. Люблю путешестовать и веду тревел блог в социальных сетях.</p>
      <p className='about__text'> Знания: HTML, CSS, адаптивной верстки, GIT, JavaScript, React App, Node.js  </p>
      </div>
    </section>
  );
}

export default About;