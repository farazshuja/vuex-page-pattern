import * as types from './mutation_types';

export default {
    [types.REQUEST_APP](state) {
      state.isLoading = true;
    },
    [types.RECEIVE_APP_SUCCESS](state, data) {
      // Do any needed data transformation to the received payload here
      state.version = data.version;
      state.session = data.session;
      state.isLoading = false;
    },
    [types.RECEIVE_APP_ERROR](state, error) {
      state.isLoading = false;
    },
};