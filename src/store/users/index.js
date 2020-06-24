import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    authData: undefined,
    currentUser: undefined,
  },
  mutations,
  actions,
  getters,
};
