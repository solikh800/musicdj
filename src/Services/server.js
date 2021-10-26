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
export const getBlogPost = id => {
  return http.get(`${config.localApi}/postbyid/${id}`);
};
export const getPostByTag = tag => {
  return http.get(`${config.localApi}/getpostbytag/${tag}`);
};
export const getPostByCategory = tag => {
  return http.get(`${config.localApi}/getpostbycategory/${tag}`);
};

//users
export const register = data => {
  data.email = data.email.toLowerCase();
  return http.post(`${config.localApi}/users/register`, JSON.stringify(data));
};
export const login = data => {
  return http.post(`${config.localApi}/users/login`, JSON.stringify(data));
};
