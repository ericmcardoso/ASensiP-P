import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';


Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});


const vm = new Vue();
const baseURL = 'http://localhost:3000/relation/';

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });


export const helper = {
  getrelation: handleError(async id => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  getrelations: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  getrelationsindicator: handleError(async id => {
    const res = await axios.get(baseURL + 'teste/' + id);
    return res.data;
  }),
  deleterelation: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createrelation: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updaterelation: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  }),

  
};