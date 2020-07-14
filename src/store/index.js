import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import User from '@/models/User';
import Order from '@/models/Order';
import users from './users';

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(User);
database.register(Order);

export default new Vuex.Store({
  modules: {
    users,
  },
  plugins: [VuexORM.install(database)],
});
