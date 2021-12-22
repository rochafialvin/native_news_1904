import axios from 'axios';

// export default axios.create({baseURL: 'http://10.0.2.2:2021'});
export default axios.create({baseURL: 'https://flash-news-api.herokuapp.com'});
export const apiNews = axios.create({
  baseURL: 'https://newsapi.org',
});
