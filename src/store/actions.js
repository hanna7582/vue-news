import axios from 'axios';

const actions = {
  loadDataFetch(store, payload) {
    store.commit('clearData')
    axios.get('/api/v0/'+payload.item+'/1.json')
    .then( res => {
      console.log(res);      
      store.commit('getData', { data: res.data });
    })
    .catch( error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        store.commit('errorCode', { status: error.response.status});
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    })
  }
}

export default actions;