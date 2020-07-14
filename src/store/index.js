import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import VuexORMAxios from '@vuex-orm/plugin-axios';
import localAxios from '@/plugins/axios';
import User from '@/models/User';
import Order from '@/models/Order';
import users from './users';

Vue.use(Vuex);

VuexORM.use(VuexORMAxios, { axios: localAxios });

const database = new VuexORM.Database();

database.register(User);
database.register(Order);

export default new Vuex.Store({
  modules: {
    users,
  },
  plugins: [VuexORM.install(database)],
});
