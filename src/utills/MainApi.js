export default class MainApi {
  constructor(myUrl) {
    this.myUrl = myUrl;
  }
  signIn(data) {
    return fetch(`${this.myUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject((400 === res.status) ? `${res.status} - Некорректно заполнено одно из полей` : (401 === res.status) ? `Не правильный email или пароль!` : `Что-то пошло не так: ${res.status}`);
    })
 }

  signUp(data) {
    return fetch(`${this.myUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject((400 === res.status) ? `${res.status} - Некорректно заполнено одно из полей` : (409 === res.status) ? `Такой email уже используется!` : `Что-то пошло не так: ${res.status}`);
      })
  }

  getName(token) {
    return fetch(`${this.myUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject((401 === res.status) ? `Токен не передан или передан не в том формате` : `Что-то пошло не так: ${res.status}`);
      })
  }
  getCards(token) {
    return fetch(`${this.myUrl}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject((401 === res.status) ? `Токен не передан или передан не в том формате` : `Что-то пошло не так: ${res.status}`);
      })
  }
  addCard({ keyword, title, text, date, source, link, image }, token) {
    return fetch(`${this.myUrl}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ keyword, title, text, date, source, link, image })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject((401 === res.status) ? `Токен не передан или передан не в том формате` : `Что-то пошло не так: ${res.status}`);
      })
  }
  deleteCard(id, token) {
    return fetch(`${this.myUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject((401 === res.status) ? `${res.status} - Токен не передан или передан не в том формате` : `Что-то пошло не так: ${res.status}`);
      })
  }
}