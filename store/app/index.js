import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex);

export const createStore = () => {
  return new Vuex.Store({
      actions,
      getters,
      mutations,
      state,

      // modules: {
      //   pageStore: {
      //     namespaced: true,
      //   }
      // }
  });
}
export default createStore();