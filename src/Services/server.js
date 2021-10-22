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

//blog routs
export const getBlogData = pageNumber => {
  return http.get(`${config.localApi}/getblogdata/${pageNumber}`);
};
export const getBlogCategory = () => {
  return http.get(`${config.localApi}/getcategory`);
};
export const getBlogRecentPosts = () => {
  return http.get(`${config.localApi}/recentposts`);
};
export const getBlogPostNumber = () => {
  return http.get(`${config.localApi}/pagesnumber`);
};
