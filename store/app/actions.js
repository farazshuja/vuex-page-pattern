import axios from 'axios';
import * as types from './mutation_types';

export const requestApp = ({ commit }) => commit(types.REQUEST_APP);
export const receiveAppSuccess = ({ commit }, data) => commit(types.RECEIVE_APP_SUCCESS, data);
export const receiveAppError = ({ commit }, error) => commit(types.RECEIVE_APP_ERROR, error);


export const fetchApp = ({ state, dispatch }) => {
    dispatch('requestApp');

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(({ data }) => {
        dispatch('receiveAppSuccess', {
          version: '1.0',
          session: {
            user: 'faraz',
            email: 'farazshuja@gmail.com',
          },
        });
    })
    .catch((error) => {
      dispatch('receiveAppError', error)
    });
}
