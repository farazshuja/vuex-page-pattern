// Disable eslint rule forbidding mutation of function parameters
/* eslint no-param-reassign: ["error", { "props": false }] */
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
};
