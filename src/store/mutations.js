import router from '../router/routes'

const mutations = {
  getData(state, payload){
    state.data=payload.data;
  },
  clearData(state){
    state.data=[];
    state.errorCode=0;
  },
  errorCode(state, payload){
    state.errorCode=payload.status;
  },
  changeCurrentMenu(state, payload){
    state.currentMenu=payload.item;
    router.push('/'+payload.item);
  }
}

export default mutations;