import React from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function handlePopup() {
    setMenuOpen(false);
    setPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
    setMenuOpen(false);
  }

  function handleMenuPopup() {
    setMenuOpen(!isMenuOpen);
  }

  function closeMenuPopup(){
    setPopupOpen(false);
  }

  return (
    <div className='App'>

      <BrowserRouter> 
        <PopupWithForm isOpen={isPopupOpen} onClose={closePopup}/>

        <Route exact path='/'> 

        <Header onSingIn={handlePopup} onMenu={handleMenuPopup} isMenuOpen={isMenuOpen} onMenuClose={closeMenuPopup}/>
        <NewsCardList />
        <About />
        <Footer />
        </Route> 
      
        <Route exact path='/saved-news'>
          <SavedNewsHeader onMenu={handleMenuPopup} isMenuOpen={isMenuOpen}/>
          <SavedNews />
          <Footer />
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
