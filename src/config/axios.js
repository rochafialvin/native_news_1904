import axios from 'axios';

export default axios.create({baseURL: 'http://10.0.2.2:2021'});
export const apiNews = axios.create({
  baseURL: 'https://newsapi.org',
});
