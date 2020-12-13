import NewsApi from './NewsApi';
import MainApi from './MainApi';

const baseUrl = 'https://nomoreparties.co/news/v2/everything';
const apiKey = 'b3408b44f80f4f0794b6210299ba05ec';


const myUrl = 'https://news-m.students.nomoreparties.xyz';

// создаем экземпляр
export const news = new NewsApi({ baseUrl, apiKey });   
export const main = new MainApi(myUrl);
