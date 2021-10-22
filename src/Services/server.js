import http from './httpServices';
import config from './config.json';

export const sendMessage = data => {
  data.email = data.email.toLowerCase();
  return http.post(`${config.localApi}/contact`, JSON.stringify(data));
};
export const getEvent = () => {
  return http.get(`${config.localApi}/getevent`);
};
export const getServices = () => {
  return http.get(`${config.localApi}/getservices`);
};
