export default class NewsApi {
  constructor({ baseUrl, apiKey }) {
      this.baseUrl = baseUrl;
      this.apiKey = apiKey;
  }
  _from(data) {
    return data.toISOString();
  }
  _to(date) {
      date.setDate(date.getDate() - 7);
      return date.toISOString();
  }
  getCards(keyWord) {
    const data = new Date();
    const from = this._from(data);
    const to = this._to(data);
    return fetch(`${this.baseUrl}?q=${keyWord}&apiKey=${this.apiKey}&pageSize=100&from=${from}&to=${to}`, {
      'Content-Type': 'application/json',
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        console.log(res);
        return Promise.reject(`Карточка не найдена`);
      })
  }
}