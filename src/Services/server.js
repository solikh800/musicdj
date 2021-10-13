import http from './httpServices';
import config from './config.json';

export const sendMessage = data => {
  data.email = data.email.toLowerCase();
  return http.post(`${config.localApi}/contact`, JSON.stringify(data));
};
