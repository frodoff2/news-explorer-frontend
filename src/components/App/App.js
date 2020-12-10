import React from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { news, main } from '../../utills/constants';
import NotFoundNews from '../NotFoundNews/NotFoundNews';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [isPopup, setIsPopup] = React.useState(false);
  const [preloader, setPreloader] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [amount, setAmount] = React.useState(3);
  const [name, setName] = React.useState('');
  const [regPage, setRegPage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  function handleOpenPopup() {
    setError('');
    setIsPopup(true);
  }

  function closePopup() {
    setIsPopup(false);
    setRegPage(false);
    setSuccess(false);
  }

  function handleMenuPopup() {
    setMenuOpen(!isMenuOpen);
  }
  function handleOpen() {
    setSuccess(false);
    handleOpenPopup();
  }
  function closeMenuPopup(){
    setIsPopup(false);
  }
  function handleChangeForm() {
    setRegPage(!regPage);
    setError('');
  }
  function handleSetArticles(data) {
    setArticles(data);
    localStorage.setItem('articles', JSON.stringify(data));
  }
  function startLoader() {
    handleSetArticles([]);
    setPreloader(true);
    setNotFound(false);
  }
  function handleSearch(keyWord) {
    startLoader();
    news.getCards(keyWord)
      .then(({ status, totalResults, articles }) => {
        if (status ==='ok' && totalResults>0) {
          return articles.map(({ title, description, publishedAt, source, url, urlToImage }) => ({
            keyword: keyWord,
            title,
            text: description,
            date: publishedAt,
            source: source.name,
            link: url,
            image: urlToImage,
            _id: cards.find((i) => i.text === description)?._id || null,
          }));
        } else {
          setNotFound(true);
          return Promise.reject(`Карточка не найдена`);
        }
      })
      .then((articles) => {
        handleSetArticles(articles);
        setPreloader(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setPreloader(false));
  }
  function handleAmount() {
    if (amount<articles.length) {
      setAmount(amount+3);
    }
  }
  function auth(token) {
    Promise.all([main.getName(token), main.getCards(token)])
      .then(([{ name }, cards ]) => {
        setName(name);
        setCards(cards);
        const localArticles = localStorage.getItem('articles');
        const arrayCards = (localArticles) ? JSON.parse(localArticles) : []; 
        updateLocalCards(arrayCards, cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function updateLocalCards(array, cards) {
    const savedArray = array.map((card) => {
      card._id = cards.find((i) => i.text === card.text)?._id || null;
      return card;
    });
    handleSetArticles(savedArray);
  }
  function handleRegistration(data, cb) {
    setLoading(true);
    setError('');
    main.signUp(data)
      .then(() => {
        closePopup();
        cb()
        setLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
    //    setError(err);
    JSON.stringify(err);

        console.log(err);
      });
  }
  function handleLogin(data, cb) {
    setError('');
    setLoading(true);
    main.signIn(data)
      .then(({ token }) => {
        closePopup();
        cb();
        localStorage.setItem('token', token);
        auth(token);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
       // setError(err);
       JSON.stringify(err);
        console.log(err);
      });
  }
  function handleExit() {
    setName('');
    setCards([]);
    localStorage.removeItem('token');
    updateLocalCards(articles, []);
  }
  function handleDeleteCard(card) {
    const token = localStorage.getItem('token');
    main.deleteCard(card._id, token)
      .then((res) => {
        console.log(res);
        const newArray = cards.filter((i) => i.text!==card.text);
        updateLocalCards(articles, newArray)
        setCards(newArray);
      })
  }
  function handleAddCard(card) {
    const token = localStorage.getItem('token');
    main.addCard(card, token)
      .then((data) => {
        const newArray = [...cards, data.articles];
        updateLocalCards(articles, newArray);
        setCards(newArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth(token);
    } else {
      const localArticles = localStorage.getItem('articles');
      const arrayCards = (localArticles) ? JSON.parse(localArticles) : []; 
      setArticles(arrayCards);
    }
  }, [])
  return (
    <div className='App'>
      <CurrentUserContext.Provider value={name}>
        <BrowserRouter> 
        <PopupWithForm 
          isOpen={isPopup} 
          onClose={closePopup} 
          handleRegistration={handleRegistration} 
          handleLogin={handleLogin} 
          handleChangeForm={handleChangeForm} 
          regPage={regPage} 
          loading={loading}
          error={error}
        />
        <SuccessPopup isOpen={success} onClose={closePopup} handleOpen={handleOpen} />
        <Header 
          onPopup={handleOpenPopup} 
          onMenu={handleMenuPopup} 
          isMenuOpen={isMenuOpen} 
          onMenuClose={closeMenuPopup} 
          handleSearch={handleSearch} 
          handleExit={handleExit} 
        />
        <Switch>
          <ProtectedRoute path='/saved-news' component={SavedNews} cards={cards} handleDeleteCard={handleDeleteCard} />
          <Route path='/'>
            {(preloader) ? <Preloader /> : (notFound) ? <NotFoundNews /> :
              (articles && articles.length) ? 
              <NewsCardList 
                articles={articles} 
                amount={amount} 
                handleAmount={handleAmount} 
                handleAddCard={handleAddCard} 
                handleDeleteCard={handleDeleteCard} 
              /> :
              null
            }
            <About />
          </Route>
        </Switch>
        <Footer /> 
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;